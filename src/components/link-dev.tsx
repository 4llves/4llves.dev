interface PropLink {
  children: ChildNode
}

export function LinkDev(children: PropLink) {
  return (
    <>
      <strong className="text-green-titles md:group-hover:text-green-titles md:text-transparent transition duration-600 ease-in-out">
        &lt;{' '}
      </strong>
      {children}
      <strong className="text-green-titles md:group-hover:text-green-titles md:text-transparent transition duration-1000 ease-in-out">
        {' '}
        /&gt;
      </strong>
    </>
  )
}
