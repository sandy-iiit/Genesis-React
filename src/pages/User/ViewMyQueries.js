import NavBar from "../../components/NavBar";
import ViewQueries from "../../components/Queries/ViewQueries";
import {useEffect, useState} from "react";
import LoadingPage from "../../components/LoadingPage";


function ViewMyQueries(){
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate an asynchronous operation (e.g., fetching data) that takes 2 seconds
        const fetchData = async () => {
            // Your asynchronous operation here...

            // Simulate a delay
            await new Promise(resolve => setTimeout(resolve, 500));

            // Set isLoading to false when the operation is complete
            setIsLoading(false);
        };
        fetchData().then(r => {})
    }, []); // Empty dependency array ensures that the effect runs once after the initial render

    return(
        <>
            {isLoading && <LoadingPage/>}
            { !isLoading &&
                <>
                <NavBar/>
                <ViewQueries/>
                    </>
            }
        </>
    )
}

export default ViewMyQueries
