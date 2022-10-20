import { useHttp } from "../hooks/http.hook";

const useFoodService = () => {
    const { loading, error, process, setProcess, request } = useHttp();
    /**
     * @TODO {"status":"failure", "code":401,"message":"You are not authorized. Please read https://spoonacular.com/food-api/docs#Authentication"} need to  fixed
     */
    const _apiKey = "2b8e006a9b5a4277aabb786eddabd67d";
    const _url = `https://api.spoonacular.com/recipes/716429/information?includeNutrition=false`;

    const getAllFood = async () => {
        const header = {
            "x-api-key": _apiKey,
        }

        const res = await request({
            url: _url,
            headers: header
        });

        return res;
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