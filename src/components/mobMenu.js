'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

// OPEN MOBILE SIDEBAR (ASIDE)
export function openMenu() {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;

  sidebar.classList.toggle("hidden");
}

// OPEN MOBILE HEADER
export function openHeader() {
  const header = document.getElementById("header");
  if (!header) return;

  header.classList.toggle("hidden");
}

// FUNCTION SCROLL TO TOP
export function scrollTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// BUTTON SCROLL TO TOP
export default function ScrollButton() {
  return (
    <button onClick={scrollTop} className="absolute bottom-6 right-20 fixed px-3 py-2 bg-[#3b82f6] rounded-full text-white hover:bg-[#1d4ed8] z-10">
      <FontAwesomeIcon icon={faArrowUp} className='w-4 h-4' />
    </button>
  );
}