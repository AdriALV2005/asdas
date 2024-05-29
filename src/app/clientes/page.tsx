import Link from "next/link";
import Search from "../../../components/search";
import TableDataClientes from "../../../components/tabledataClientes";

const Customers = async ({
    searchParams,
}: {
    searchParams?: {
        query?: string;
    };
}) => {
    const query = searchParams?.query || "";
    return (
        <div className="w-screen py-20 flex justify-center flex-col items-center">
      <div className="flex items-center justify-between gap-1 mb-5">
        <h1 >Clientes</h1>
      </div>    
      <div className="overflow-x-auto">
          <div className="mb-2 w-full text-right">
                     <Link href="/clientes/create" className="btn btn-primary">
                        Crear
                    </Link>
                </div>
                <Search />
                {/* Aquí agregamos la tabla de contratos */}
                <TableDataClientes query={query} />
            </div>
        </div>
    );
};

export default Customers;
