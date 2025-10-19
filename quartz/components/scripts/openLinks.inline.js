// openLinks.inline.js
(function() {
  function isAnchor(el) {
    return el && el.tagName && el.tagName.toLowerCase() === 'a';
  }

  function findAnchor(node) {
    while (node && node !== document) {
      if (isAnchor(node)) return node;
      node = node.parentNode;
    }
    return null;
  }

  function shouldForceNewTab(link) {
    const href = link.getAttribute('href');
    if (!href) return false;
    if (href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:')) return false;
    if (link.hasAttribute('target') || link.hasAttribute('download')) return false;
    return true;
  }

  document.addEventListener('click', function(ev) {
    if (ev.defaultPrevented) return;
    if (ev.button && ev.button !== 0) return;
    if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey) return;

    const anchor = findAnchor(ev.target);
    if (!anchor) return;

    if (!shouldForceNewTab(anchor)) return;

    const href = anchor.getAttribute('href');
    if (!href) return;

    try {
      window.open(href, '_blank', 'noopener,noreferrer');
      ev.preventDefault();
    } catch (e) {
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('rel', 'noopener noreferrer');
    }
  }, true);
})();
