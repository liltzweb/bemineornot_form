(() => {
  function initForm() {
    const cfg = window.FORM_CONFIG || window.siteConfig;
    if (!cfg) return;

    const $ = (id) => document.getElementById(id);

    try {
      document.title = `${cfg.product || "bemineornot"} · order form`;
      if ($("productName")) $("productName").textContent = cfg.product || "bemineornot";
      if ($("motif")) $("motif").textContent = cfg.motif || "💌";
      if ($("contextText")) $("contextText").textContent = cfg.context || "";
      if ($("mediaText")) $("mediaText").textContent = `kebutuhan media: ${cfg.media || "-"}`;

      function rupiah(num) {
        return "Rp" + Number(num || 0).toLocaleString("id-ID");
      }

      function slugify(text) {
        return (text || "").toLowerCase().replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "");
      }

      function validHex(hex) {
        return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hex || "");
      }

      // Default palette swatches
      const defaultSwatches = $("defaultSwatches");
      if (defaultSwatches && Array.isArray(cfg.palette)) {
        defaultSwatches.innerHTML = "";
        cfg.palette.forEach((hex) => {
          const swatch = document.createElement("span");
          swatch.className = "swatch";
          const icon = document.createElement("i");
          icon.style.background = hex;
          swatch.appendChild(icon);
          const txt = document.createTextNode(hex);
          swatch.appendChild(txt);
          defaultSwatches.appendChild(swatch);
        });
      }

      // Palette inputs when recolor is yes
      const paletteInputs = $("paletteInputs");
      if (paletteInputs && Array.isArray(cfg.palette)) {
        paletteInputs.innerHTML = "";
        cfg.palette.forEach((hex, i) => {
          const field = document.createElement("div");
          field.className = "field";
          const labelSpan = document.createElement("span");
          labelSpan.textContent = `color 0${i + 1}`;
          
          const row = document.createElement("div");
          row.className = "palette-row";

          const colorPicker = document.createElement("input");
          colorPicker.type = "color";
          colorPicker.value = hex;

          const textInput = document.createElement("input");
          textInput.type = "text";
          textInput.value = hex;
          textInput.dataset.index = String(i);

          colorPicker.addEventListener("input", (e) => {
            textInput.value = e.target.value.toUpperCase();
            textInput.classList.remove("invalid");
          });

          textInput.addEventListener("input", (e) => {
            const val = e.target.value.trim();
            if (validHex(val)) {
              colorPicker.value = val;
              textInput.classList.remove("invalid");
            }
          });

          row.append(colorPicker, textInput);
          field.append(labelSpan, row);
          paletteInputs.appendChild(field);
        });
      }

      function getTotal() {
        return (cfg.price || 15000) + ($("recolorYes")?.checked ? 2000 : 0) + ($("rush")?.checked ? 4000 : 0);
      }

      function updatePrice() {
        if ($("priceOut")) $("priceOut").textContent = rupiah(getTotal());
      }

      document.querySelectorAll('input[name="recolor"]').forEach((radio) => {
        radio.id = radio.value === "yes" ? "recolorYes" : "recolorNo";
        radio.addEventListener("change", () => {
          $("pillNo")?.classList.toggle("active", $("recolorNo")?.checked);
          $("pillYes")?.classList.toggle("active", $("recolorYes")?.checked);
          paletteInputs?.classList.toggle("show", $("recolorYes")?.checked);
          updatePrice();
        });
      });
      $("rush")?.addEventListener("change", updatePrice);

      // Render Dynamic Sections
      const dynamicRoot = $("dynamicSections");
      if (dynamicRoot && Array.isArray(cfg.sections)) {
        dynamicRoot.innerHTML = "";
        cfg.sections.forEach((section, sectionIndex) => {
          const card = document.createElement("section");
          card.className = "exhibit";

          const heading = document.createElement("div");
          heading.className = "exhibit-head";
          const number = document.createElement("span");
          number.className = "exhibit-num";
          number.textContent = String(sectionIndex + 2).padStart(2, "0");
          const copy = document.createElement("div");
          const title = document.createElement("h2");
          title.className = "exhibit-title";
          title.textContent = section.title || "";
          const sub = document.createElement("p");
          sub.className = "exhibit-sub";
          sub.textContent = "replace sesuai isi dan konteks website (kosongkan jika ingin memakai default)";
          copy.append(title, sub);
          heading.append(number, copy);

          const body = document.createElement("div");
          body.className = "exhibit-body row2";
          if (Array.isArray(section.fields)) {
            section.fields.forEach((field) => {
              const label = document.createElement("label");
              label.className = "field" + (field.long ? " long" : "");
              const labelText = document.createElement("span");
              labelText.textContent = field.label || field.key;
              
              if (field.required) {
                const mark = document.createElement("b");
                mark.className = "req";
                mark.textContent = " *";
                labelText.appendChild(mark);
              } else {
                const optHint = document.createElement("small");
                optHint.style.cssText = "font-size:0.75rem;color:var(--muted);font-weight:normal;margin-left:5px";
                optHint.textContent = "(opsional)";
                labelText.appendChild(optHint);
              }

              const input = document.createElement(field.long ? "textarea" : "input");
              if (!field.long) input.type = "text";
              input.id = "field_" + field.key;
              input.dataset.key = field.key;
              input.dataset.label = field.label || field.key;
              input.dataset.required = field.required ? "true" : "false";
              input.placeholder = field.placeholder || "";
              if (field.long) input.rows = 4;
              label.append(labelText, input);
              body.appendChild(label);
            });
          }
          card.append(heading, body);
          dynamicRoot.appendChild(card);
        });
      }

      if ($("mediaNumber") && Array.isArray(cfg.sections)) {
        $("mediaNumber").textContent = String(cfg.sections.length + 2).padStart(2, "0");
      }
      if ($("linkNumber") && Array.isArray(cfg.sections)) {
        $("linkNumber").textContent = String(cfg.sections.length + 3).padStart(2, "0");
      }
      updatePrice();

      function clearErrors() {
        document.querySelectorAll(".invalid").forEach((element) => element.classList.remove("invalid"));
        if ($("formError")) {
          $("formError").hidden = true;
          $("formError").textContent = "";
        }
      }

      function validate() {
        clearErrors();
        const required = [
          $("customerName"),
          $("customerTelegram"),
          $("deadline"),
          $("websiteTitle"),
          $("linkOne"),
          $("linkTwo")
        ].filter(Boolean);

        document.querySelectorAll('[data-required="true"]').forEach((input) => required.push(input));
        const invalid = required.filter((input) => !input.value.trim());

        if ($("recolorYes")?.checked && paletteInputs) {
          paletteInputs.querySelectorAll('input[type="text"]').forEach((input) => {
            if (!validHex(input.value.trim())) invalid.push(input);
          });
        }

        const link1 = $("linkOne")?.value?.trim();
        const link2 = $("linkTwo")?.value?.trim();
        let isLinkDuplicate = false;
        if (link1 && link2 && slugify(link1) === slugify(link2)) {
          if ($("linkTwo")) invalid.push($("linkTwo"));
          isLinkDuplicate = true;
        }

        const uniqueInvalid = [...new Set(invalid)];
        if (uniqueInvalid.length > 0) {
          uniqueInvalid.forEach((input) => {
            input.classList.add("invalid");
            input.closest(".link-suffix")?.classList.add("invalid");
          });
          if ($("formError")) {
            if (isLinkDuplicate) {
              $("formError").textContent = "Opsi link 01 dan link 02 harus berbeda ya ♡";
            } else {
              $("formError").textContent = `Masih ada ${uniqueInvalid.length} kolom wajib yang belum diisi dengan benar. Mohon lengkapi dulu ya ♡`;
            }
            $("formError").hidden = false;
          }
          uniqueInvalid[0].scrollIntoView({ behavior: "smooth", block: "center" });
          try { uniqueInvalid[0].focus({ preventScroll: true }); } catch (_) {}
          return false;
        }
        return true;
      }

      document.addEventListener("input", (event) => {
        event.target?.classList?.remove("invalid");
        event.target?.closest?.(".link-suffix")?.classList?.remove("invalid");
        if ($("formError") && document.querySelectorAll(".invalid").length === 0) {
          $("formError").hidden = true;
        }
      });

      function buildOrderText() {
        const recolor = $("recolorYes")?.checked;
        const palette = paletteInputs ? Array.from(paletteInputs.querySelectorAll('input[type="text"]')).map((input) => input.value.trim().toUpperCase()) : [];
        const rush = $("rush")?.checked;
        const lines = [
          "𓏲 " + (cfg.product || "bemineornot") + " form " + (cfg.motif || "💌"),
          "website price : " + rupiah(getTotal()),
          "terms & condition : agreed",
          "",
          "00 · customer identity",
          "name : " + ($("customerName")?.value?.trim() || ""),
          "username : " + ($("customerTelegram")?.value?.trim() || ""),
          "payment : qris no rate",
          "deadline : " + ($("deadline")?.value || "") + (rush ? " (rush <24 jam +Rp4.000)" : " (regular)"),
          "",
          "01 · website customization",
          "recolor : " + (recolor ? "yes (+Rp2.000)" : "no"),
          "palette : " + (recolor ? palette.join(", ") : (cfg.palette || []).join(", ")),
          ""
        ];

        if (Array.isArray(cfg.sections)) {
          cfg.sections.forEach((section, index) => {
            lines.push(String(index + 2).padStart(2, "0") + " · " + (section.title || ""));
            if (Array.isArray(section.fields)) {
              section.fields.forEach((field) => {
                const value = $("field_" + field.key)?.value?.trim() || "";
                lines.push((field.label || field.key) + " → " + (value || "(pakai default katalog)"));
              });
            }
            lines.push("");
          });
        }

        const mediaNum = $("mediaNumber")?.textContent || "10";
        lines.push(mediaNum + " · photos & background music");
        lines.push("requirements → " + (cfg.media || "-"));
        lines.push("");

        const linkNum = $("linkNumber")?.textContent || "11";
        lines.push(linkNum + " · website link");
        lines.push("website title → " + ($("websiteTitle")?.value?.trim() || ""));
        lines.push("link option 01 → " + slugify($("linkOne")?.value || "") + ".pages.dev");
        lines.push("link option 02 → " + slugify($("linkTwo")?.value || "") + ".pages.dev");
        lines.push("");
        lines.push("foto/audio akan dikirim sebagai file di chat Telegram ini.");
        return lines.join("\n");
      }

      async function copyText(text) {
        if (!text) return false;
        // Method 1: Modern Async Clipboard API
        if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
          try {
            await navigator.clipboard.writeText(text);
            return true;
          } catch (_) {}
        }
        // Method 2: Robust execCommand Fallback
        try {
          const textarea = document.createElement("textarea");
          textarea.value = text;
          textarea.setAttribute("readonly", "");
          textarea.style.position = "fixed";
          textarea.style.top = "0";
          textarea.style.left = "0";
          textarea.style.width = "2em";
          textarea.style.height = "2em";
          textarea.style.padding = "0";
          textarea.style.border = "none";
          textarea.style.outline = "none";
          textarea.style.boxShadow = "none";
          textarea.style.background = "transparent";
          textarea.style.opacity = "0.01";
          textarea.style.zIndex = "-1";
          document.body.appendChild(textarea);
          textarea.focus();
          textarea.select();
          textarea.setSelectionRange(0, textarea.value.length);
          const copied = document.execCommand("copy");
          document.body.removeChild(textarea);
          return !!copied;
        } catch (_) {
          return false;
        }
      }

      $("orderForm")?.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (!validate()) return;
        const text = buildOrderText();
        if ($("outputText")) $("outputText").textContent = text;
        if ($("outputCard")) $("outputCard").hidden = false;
        $("outputCard")?.scrollIntoView({ behavior: "smooth", block: "start" });

        const copied = await copyText(text);
        if (copied) {
          if ($("sendStatus")) $("sendStatus").textContent = "tersalin ✓";
          if ($("resultMessage")) $("resultMessage").textContent = "✓ Seluruh form berhasil disalin otomatis ke clipboard! Silakan klik tombol 'kirim ke telegram @reeumen' di bawah untuk mengirim ke admin.";
          if ($("copyButton")) $("copyButton").textContent = "tersalin ✓";
          setTimeout(() => {
            if ($("copyButton")) $("copyButton").textContent = "salin form";
          }, 3000);
        } else {
          if ($("sendStatus")) $("sendStatus").textContent = "siap disalin";
          if ($("resultMessage")) $("resultMessage").textContent = "Form pesanan berhasil dibuat! Silakan tekan tombol 'salin form' di bawah.";
        }
      });

      $("copyButton")?.addEventListener("click", async () => {
        const text = $("outputText")?.textContent || "";
        if (!text) return;
        const copied = await copyText(text);
        if (copied) {
          if ($("sendStatus")) $("sendStatus").textContent = "tersalin ✓";
          if ($("resultMessage")) $("resultMessage").textContent = "✓ Form pesanan berhasil disalin ke clipboard! Silakan paste (tempel) di chat Telegram @reeumen.";
          const orig = $("copyButton").textContent;
          $("copyButton").textContent = "tersalin ✓";
          setTimeout(() => {
            $("copyButton").textContent = orig;
          }, 2500);
        } else {
          if ($("sendStatus")) $("sendStatus").textContent = "salin manual";
          if ($("resultMessage")) $("resultMessage").textContent = "Browser membatasi penyalinan otomatis. Silakan klik tombol 'blok teks (salin manual)' lalu pilih Salin/Copy di layar perangkat kamu.";
        }
      });

      $("selectManualButton")?.addEventListener("click", () => {
        const pre = $("outputText");
        if (!pre) return;
        const range = document.createRange();
        range.selectNodeContents(pre);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        if ($("resultMessage")) {
          $("resultMessage").textContent = "✓ Seluruh teks form di atas sudah diseleksi/diblok. Silakan tekan tombol 'Salin' / 'Copy' pada layar kamu secara manual.";
        }
      });
    } catch (err) {
      console.error("Form initialization error:", err);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initForm);
  } else {
    initForm();
  }
})();
