'use client';

// OPEN MOBILE MENU
export function openMenu() {
    const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;

  sidebar.classList.toggle("hidden");
}

// CLOSE MOBILE MENU
export function closeMenu() {
    document.getElementById("sidebar").style.display = "hidden";
}

// function to scroll to top when icon is clicked
export function scrolTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

