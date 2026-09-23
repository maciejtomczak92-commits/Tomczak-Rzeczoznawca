// UZUPEŁNIJ TEN ADRES PRZED PUBLIKACJĄ:
const CONTACT_EMAIL = "TWOJ_EMAIL@DOMENA.PL";

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("formularz")?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (CONTACT_EMAIL.includes("TWOJ_EMAIL")) {
    alert("Uzupełnij adres e-mail w pliku script.js przed publikacją strony.");
    return;
  }
  const form = new FormData(e.currentTarget);
  const subject = encodeURIComponent("Zapytanie o wycenę nieruchomości – tomczak-rzeczoznawca.pl");
  const body = encodeURIComponent(
`Imię i nazwisko: ${form.get("name")}
E-mail: ${form.get("email")}
Telefon: ${form.get("phone")}
Rodzaj nieruchomości: ${form.get("property")}
Lokalizacja: ${form.get("location")}
Cel wyceny: ${form.get("purpose")}

Wiadomość:
${form.get("message")}`
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
