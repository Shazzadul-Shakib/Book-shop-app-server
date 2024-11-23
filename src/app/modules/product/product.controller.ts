import { Request, Response } from 'express';
import { productServices } from './services';

// ----- Add Book To Database ----- //
const addBook = async (req: Request, res: Response) => {
  try {
    const book = req.body;
    const result = await productServices.addBookService(book);

    // ----- Send Response ----- //
    res.status(200).json({
      message: 'Book created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// ----- Get All Books From Database ----- //
const getAllBooks = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllBooksService();

    // ----- Send Response ----- //
    res.status(200).json({
      message: 'Books retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// ----- Get Single Book From Database ----- //
const getBook = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getBookService(productId);

    // ----- Send Response ----- //
    res.status(200).json({
      message: 'Book retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const productController = {
  addBook,
  getAllBooks,
  getBook,
};
