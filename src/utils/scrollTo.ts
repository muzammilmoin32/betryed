export function scrollToNextSection(e: React.MouseEvent<HTMLElement, MouseEvent>, sectionId: string) {
  e.preventDefault();
  const element = document.querySelector(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
