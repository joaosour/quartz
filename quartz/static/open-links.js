function setLinksToOpenInNewTab(root = document) {
  const links = root.querySelectorAll("a[href]");
  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href && !href.startsWith("#")) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
}

// Roda ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  setLinksToOpenInNewTab();

  // Observa mudanças de SPA e aplica também a novos links
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1) {
          setLinksToOpenInNewTab(node);
        }
      });
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});
