<p>
  {languages.length > 1 ? "Languages: " : "Language: "}
  {languages.map((l) => l.name).join(", ")}
</p>;
{
  currencies.length > 0 && (
    <p>
      {currencies.length > 1 ? "Currencies: " : "Currency: "}
      {currencies.map((curr) => curr.name).join(", ")}
    </p>
  );
}
<p>Population: {easyNumberFormatter.formatNumber(population)}</p>;
