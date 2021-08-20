interface Props {
  children: any;
}

export function Layout(props: Props) {
  return (
    <>
      <section id="root" className="">{props.children}</section>
    </>
  );
}
