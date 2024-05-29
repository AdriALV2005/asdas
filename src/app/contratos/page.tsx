import Link from "next/link";
import Search from "../../../components/search";
import TableDataContratos from "../../../components/tabledataContratos"; // Importamos el componente de tabla de contratos

const Contracts = async ({
    searchParams,
}: {
    searchParams?: {
        query?: string;
    };
}) => {
    const query = searchParams?.query || "";
    return (
        <div>
            <div>
                <h1>Contratos</h1>
            </div>
            <div>
                <div>
                    <Link href="/contratos/create" className="btn btn-primary">
                        Crear
                    </Link>
                </div>
                <Search />
                {/* Aquí agregamos la tabla de contratos */}
                <TableDataContratos query={query} />
            </div>
        </div>
    );
};

export default Contracts;
