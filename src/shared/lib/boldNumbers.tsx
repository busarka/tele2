export const boldNumbers = (text: string) => {
  return text.split(/(\d+)/).map((part, index) =>
    /^\d+$/.test(part) ? (
      <span key={index} style={{ fontWeight: 700 }}>
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    )
  );
};