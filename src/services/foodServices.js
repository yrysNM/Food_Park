import { useHttp } from "../hooks/http.hook";

const useFoodService = () => {
    const { loading, error, process, setProcess, request } = useHttp();
    /**
     * @TODO {"status":"failure", "code":401,"message":"You are not authorized. Please read https://spoonacular.com/food-api/docs#Authentication"} need to  fixed
     */
    const _url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2`;

    const getAllFood = async () => {
        const res = await request(_url);

        return res.data;
    }

    return {
        loading,
        error,
        process,
        getAllFood,
        setProcess
    };
}

export default useFoodService;