import Link from "next/link";
import TableData from "../../../components/tabledata";
import { Suspense } from "react";
import { Spinner } from "../../../components/spinner";
import Search from "../../../components/search";
 
const Home = async ({
        searchParams,
    }: {
        searchParams?: {
            query?: string;
        };
    }) => {
    const query = searchParams?.query || "";
    return (
    <div >
      <div >
        <h1 >Lupe</h1>
      </div>    
        <div >
          <div >
            <Link
              href="/employee/create"
              className="btn btn-primary">
              Create
            </Link>
          </div>
          <Search />
          <Suspense key={query} fallback={<Spinner />}>
            <TableData query={query}/>
          </Suspense>
      </div>  
    </div>
  ); 
};
  
export default Home;