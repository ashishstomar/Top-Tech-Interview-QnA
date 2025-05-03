//LCM (Least Common Multiple)

function lcm(a, b) {
  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
  return (a * b) / gcd(a, b);
}
