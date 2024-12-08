type ClipPathImgProps = {
  img?: string;
  alt?: string;
  svg?: string;
};

export function ClipPathImg({ img, alt, svg }: ClipPathImgProps) {
  return (
    <div className="gap-2 p-5">
      <figure className="relative">
        <img
          src={img}
          alt={alt}
          className="w-full md:w-auto max-w-sm h-full md:h-auto object-cover aspect-square"
          style={{
            maskImage: `url("/${svg}.svg")`,
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
          }}
        />
      </figure>
    </div>
  );
}
