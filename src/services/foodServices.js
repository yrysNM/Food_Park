import { useHttp } from "../hooks/http.hook";

const useFoodService = () => {
    const { loading, error, process, setProcess, request } = useHttp();

    const _apiBase = `https://api.spoonacular.com`;
    const _apiKey = "2b8e006a9b5a4277aabb786eddabd67d";
    const HEADER = {
        "x-api-key": _apiKey,
    }

    /**
     * @url for get recipes  
     *  // const _url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=soup&number=2`;
     */

    const getMenuSuggest = async () => {
        const arrIdList = [];

        const res = await request({
            url: `${_apiBase}/food/menuItems/suggest?query=chicke&number=6`,
            headers: HEADER
        });

        res.results.forEach(value => {
            arrIdList.push(value.id);
        });

        return (!arrIdList) ? null : getDataBinomaly(arrIdList);
    }

    function _transformFood(food) {
        return {
            id: food.id,
            name: food.title,
            imgUrl: food.image,
            usedIngredients: food.usedIngredients

        }
    }

    const getDataBinomaly = async (data) => {
        let left = 0;
        let right = data.length - 1;
        const obj = {
            data: []
        };
        while (left <= right) {
            const res = await request({
                url: `${_apiBase}/recipes/${data[right]}/information?includeNutrition=false`,
                headers: HEADER,
            });
            obj.data.push(res);
            left++;
            right--;
        }
        return (obj.data.length <= 0) ? null : obj.data.map(_transformFood);
    }

    return {
        loading,
        error,
        process,
        getMenuSuggest,
        setProcess
    };
}

export default useFoodService;