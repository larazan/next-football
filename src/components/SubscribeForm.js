export default function SubsribeForm() {
  return (
    <>
      <div className="h-max mx-auto w-full lg:w-1/2 flex flex-col space-y-3 px-3 md:px-6 lg:px-0 py-4 md:py-4  justify-center2 items-center2 bg-[#f5f7f9]">
        <div className="flex flex-col px-4 py-6 mx-auto rounded  md:w-12/12 space-y-4  bg-[#000e29]">
          <span className="uppercase text-base md:text-2xl font-semibold text-white">
            Newsletter
          </span>
          <div className="w-full">
            <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 md:w-80 rounded bg-[#1a273f] shadow-sm text-white focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />

              <button className="bg-[#dc052d] hover:opacity-80 text-white py-2 px-4 rounded font-semibold w-full md:w-40 ">
                Subscribe
              </button>
            </div>
          </div>
          <div>
            <p className="text-xs leading-tight text-white">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
