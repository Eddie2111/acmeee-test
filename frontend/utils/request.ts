class BaseAPI {
  protected baseUrl: string;
  protected headers: Record<string, string>;

  constructor() {
    this.baseUrl = import.meta.env.BASEAPI || "http://localhost:10000/";
    this.headers = {
      "Content-Type": "application/json",
    };
  }
}

class SearchAPI extends BaseAPI {
  constructor() {
    super();
  }

  async getSearchResult(debouncedQuery: string) {
    const response = await fetch(
      `${this.baseUrl}generate?query=${encodeURIComponent(debouncedQuery)}`,
      {
        method: "GET",
        headers: this.headers,
      }
    );
    
    if (!response.ok) {
      throw new Error("Failed to fetch results");
    }
    
    const responseData = await response.json();
    console.log(responseData);
    return responseData.data;
  }
}

export const useSearchAPI = new SearchAPI();
