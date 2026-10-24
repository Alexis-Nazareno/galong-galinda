const networkActivityEvent = 'app:network-activity';
let pendingNetworkRequests = 0;

export function trackNetworkActivity() {
  pendingNetworkRequests += 1;
  window.dispatchEvent(new CustomEvent(networkActivityEvent, { detail: 1 }));
  let isFinished = false;

  return () => {
    if (isFinished) return;
    isFinished = true;
    pendingNetworkRequests = Math.max(0, pendingNetworkRequests - 1);
    window.dispatchEvent(new CustomEvent(networkActivityEvent, { detail: -1 }));
  };
}

export function getPendingNetworkRequests() {
  return pendingNetworkRequests;
}

export { networkActivityEvent };
