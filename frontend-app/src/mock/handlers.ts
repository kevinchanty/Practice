import { rest } from "msw";

// Mock Data
export const products = [
  {
    id: 1,
    code: "sample_code_1",
    name: "sample name 1",
    url: "sampleUrl1",
    price: {
      formattedValue: "$8888",
    },
    images: [
      {
        url: "sampleUrl1",
      },
    ],
    brandName: "sample brand name1",
    quentity: 8,
  },
  {
    id: 2,
    code: "sample_code_2",
    name: "sample name 2",
    url: "sampleUrl2",
    price: {
      formattedValue: "$7777",
    },
    images: [
      {
        url: "sampleUrl2",
      },
    ],
    brandName: "sample brand name2",
    quentity: 82,
  },
  {
    id: 3,
    code: "sample_code_3",
    name: "sample name 3",
    url: "sampleUrl3",
    price: {
      formattedValue: "$7777",
    },
    images: [
      {
        url: "sampleUrl3",
      },
    ],
    brandName: "sample brand name3",
    quentity: 88,
  },
  {
    id: 4,
    code: "sample_code_4",
    name: "sample name 4",
    url: "sampleUrl4",
    price: {
      formattedValue: "$7777",
    },
    images: [
      {
        url: "sampleUrl4",
      },
    ],
    brandName: "sample brand name4",
    quentity: 82,
  },
  {
    id: 5,
    code: "sample_code_5",
    name: "sample name 5",
    url: "sampleUrl5",
    price: {
      formattedValue: "$7777",
    },
    images: [
      {
        url: "sampleUrl5",
      },
    ],
    brandName: "sample brand name5",
    quentity: 82,
  },
  {
    id: 6,
    code: "sample_code_6",
    name: "sample name 6",
    url: "sampleUrl6",
    price: {
      formattedValue: "$7777",
    },
    images: [
      {
        url: "sampleUrl6",
      },
    ],
    brandName: "sample brand name6",
    quentity: 82,
  },
];

// Define handlers that catch the corresponding requests and returns the mock data.
export const handlers = [
  rest.get(
    `http://${import.meta.env.VITE_BACKEND}/products`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(products));
    }
  ),
];
