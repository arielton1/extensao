document.addEventListener("keydown", function (event) {
  if (event.key === "End") {
    const button = document.querySelector(
      ".cursor-pointer.absolute.right-6.bottom-[124px].md:bottom-[180px].lg:bottom-[120px].z-10.rounded-full.border.border-gray-200.bg-gray-50.text-gray-600.dark:border-white/10.dark:bg-white/10.dark:text-gray-200"
    );
    if (button) {
      button.click();
    }
  }
});
