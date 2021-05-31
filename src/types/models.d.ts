declare namespace Model {
  interface Product {
    name: string;
    url: string;
    description: string;
    opensource: boolean;
    repositoryUrl?: string;
  }

  interface Picture {
    url: string;
    title: string;
    description: string;
  }
}
