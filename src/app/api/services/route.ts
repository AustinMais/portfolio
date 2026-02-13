import { servicePackages, retainer } from "~/data/resume";

export async function GET() {
  const packages = servicePackages.map((pkg) => ({
    id: pkg.id,
    name: pkg.name,
    price: pkg.price,
    bestFor: pkg.bestFor,
    features: [...pkg.features],
    tagline: pkg.tagline,
    popular: "popular" in pkg && pkg.popular,
  }));

  return Response.json({
    packages,
    retainer: { range: retainer.range, items: [...retainer.items] },
  });
}
