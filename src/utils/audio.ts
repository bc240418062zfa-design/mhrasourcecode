// Audio module disabled
export function isSoundEnabled(): boolean {
  return false;
}

export function toggleSound(): boolean {
  return false;
}

export function playUiChime(_type?: 'click' | 'ping' | 'switch' | 'success' | 'enable') {
  // Silent no-op
}
