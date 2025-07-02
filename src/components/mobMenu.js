'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

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
export function scrollTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

export default function ScrollButton() {
  return (
    <button onClick={scrollTop} className="absolute bottom-6 right-20 fixed px-3 py-2 bg-[#3b82f6] rounded-full text-white hover:bg-[#1d4ed8]">
      <FontAwesomeIcon icon={faArrowUp} className='w-4 h-4' />
    </button>
  );
}