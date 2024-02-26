type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <section className="text-[0.95em] desktoplg:text-[1.1em] desktopxl:text-[1.5em]">
      {children}
    </section>
  );
}
