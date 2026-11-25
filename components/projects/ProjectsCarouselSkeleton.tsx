export default function ProjectsCarouselSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="
        grid grid-cols-1 gap-6
        sm:grid-cols-2 lg:grid-cols-3
      "
    >
      {[1, 2, 3].map(item => (
        <div
          key={item}
          className={`
            aspect-4/3 animate-pulse
            rounded-2xl bg-slate-200
            ${item === 2 ? "hidden sm:block" : ""}
            ${item === 3 ? "hidden lg:block" : ""}
          `}
        />
      ))}
    </div>
  );
}
