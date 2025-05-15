"use client";

export function initBillGangPopup() {
  // Only run in browser context
  if (typeof window === 'undefined') return;

  // Create the container if it doesn't exist
  let billgangContainer = document.getElementById('billgang-container');
  if (!billgangContainer) {
    billgangContainer = document.createElement('div');
    billgangContainer.id = 'billgang-container';
    document.body.insertAdjacentElement('beforeend', billgangContainer);
  }

  // Define spinner SVG
  const spinner = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="35" height="35" style="shape-rendering: auto; display: block; background: transparent;" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle cx="50" cy="50" fill="none" stroke="rgba(255, 255, 255, 1)" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
  </circle><g></g></g></svg>`;

  // Add event listener for close messages
  window.addEventListener('message', function(event) {
    if (event.data === 'closeBillgangIframe') {
      if (billgangContainer) {
        billgangContainer.innerHTML = '';
        document.body.style.overflow = 'auto';
      }
    }
  });

  // Add event listener for buttons with BillGang attributes
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const button = target.closest('[data-billgang-product-path][data-billgang-domain]');

    if (button) {
      document.body.style.overflow = 'hidden';

      const productPath = button.getAttribute('data-billgang-product-path');
      let domain = button.getAttribute('data-billgang-domain');

      if (!domain || !productPath) return;

      if (!domain.includes('https://')) {
        domain = 'https://' + domain;
      }

      // Create modal
      const modal = document.createElement('div');
      modal.id = 'billgang-embed-' + productPath;
      modal.style.position = 'fixed';
      modal.style.width = '100%';
      modal.style.height = '100%';
      modal.style.zIndex = '9998';
      modal.style.top = '0';
      modal.style.left = '0';

      // Create backdrop
      const modalBackdrop = document.createElement('div');
      modalBackdrop.classList.add('billgang-backdrop');
      modalBackdrop.style.position = 'absolute';
      modalBackdrop.style.width = '100%';
      modalBackdrop.style.height = '100%';
      modalBackdrop.style.background = '#00000075';
      modalBackdrop.style.backdropFilter = 'blur(3px)';

      modal.appendChild(modalBackdrop);

      // Create iframe wrapper
      const iframeWrapper = document.createElement('div');
      iframeWrapper.style.position = 'absolute';
      iframeWrapper.style.width = '100%';
      iframeWrapper.style.height = '100%';
      iframeWrapper.style.margin = 'auto';
      iframeWrapper.style.zIndex = '1';

      // Create loader
      const loader = document.createElement('div');
      loader.id = "billgang-loader";
      loader.style.position = 'absolute';
      loader.style.width = '100%';
      loader.style.height = '100%';
      loader.style.margin = 'auto';
      loader.style.zIndex = '1';
      loader.style.display = 'flex';
      loader.style.justifyContent = 'center';
      loader.style.alignItems = 'center';
      loader.innerHTML = spinner;
      iframeWrapper.insertAdjacentElement('beforeend', loader);

      modal.appendChild(iframeWrapper);

      // Create iframe
      const iframe = document.createElement('iframe');
      iframe.src = domain + '/embed/' + productPath;
      iframe.style.position = 'absolute';
      iframe.style.width = '100%';
      iframe.style.height = '100%';

      iframe.onload = function() {
        const billgangLoader = document.getElementById('billgang-loader');
        if (billgangLoader) {
          billgangLoader.remove();
        }
      };

      iframe.scrolling = 'auto';
      iframeWrapper.appendChild(iframe);

      // Add close button - **Refined Responsive Styles - Closer Positioning**
      const closeButton = document.createElement('button');
      closeButton.className = 'billgang-close-button';
      closeButton.style.position = 'absolute';
      closeButton.style.top = '1vh';           // Reduced top to 1vh (or even try 0.5vh)
      closeButton.style.right = '1vw';          // Reduced right to 1vw (or even try 0.5vw)
      closeButton.style.zIndex = '9999';
      closeButton.style.backgroundColor = '#10b981';
      closeButton.style.color = 'white';
      closeButton.style.border = 'none';
      closeButton.style.borderRadius = '50%';
      closeButton.style.width = '3.5vw';          // Slightly smaller width (adjust as needed)
      closeButton.style.height = '3.5vw';         // Slightly smaller height (adjust to match width)
      closeButton.style.minWidth = '28px';     // Minimum width (slightly reduced)
      closeButton.style.minHeight = '28px';    // Minimum height (slightly reduced)
      closeButton.style.maxWidth = '42px';     // Reduced max width (adjust as needed)
      closeButton.style.maxHeight = '42px';    // Reduced max height (adjust to match width)
      closeButton.style.cursor = 'pointer';
      closeButton.style.display = 'flex';
      closeButton.style.alignItems = 'center';
      closeButton.style.justifyContent = 'center';
      closeButton.style.transition = 'background-color 0.2s';
      closeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
      closeButton.onclick = function() {
        window.postMessage('closeBillgangIframe', '*');
      };

      closeButton.addEventListener('mouseover', () => {
        closeButton.style.backgroundColor = '#0d9868';
      });

      closeButton.addEventListener('mouseout', () => {
        closeButton.style.backgroundColor = '#10b981';
      });

      modal.appendChild(closeButton);

      // Add modal to container
      if (billgangContainer) {
        billgangContainer.innerHTML = '';
        billgangContainer.insertAdjacentElement('beforeend', modal);
      }
    }
  });
}