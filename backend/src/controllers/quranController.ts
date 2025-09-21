import { QuranApiService } from "../services/QuranApiService";
import { Request, Response } from "express";
import { validateChapterId } from "../validator";

export class QuranController {
  constructor(private quranService: QuranApiService) {}

  getChapters = async (req: Request, res: Response): Promise<void> => {
    try {
      const chapters = await this.quranService.getChapters();

      const response = {
        success: true,
        data: chapters,
        timestamp: new Date().toISOString(),
      };

      res.json(response);
    } catch (error) {
      console.error("Error fetching chapters", error);
      // Logger.error('Error fetching chapters', error);
      // this.handleError(res, error, 'Failed to fetch chapters');
    }
  };

  getChapter = async (req: Request, res: Response): Promise<void> => {
    try {
      const chapterId = validateChapterId(req.params.id ?? "");

      const chapter = await this.quranService.getChapter(chapterId);

      const response = {
        success: true,
        data: chapter,
        timestamp: new Date().toISOString(),
      };

      res.json(response);
    } catch (error) {
      console.error(res, error, "Failed to fetch chapter");
    }
  };

  // getVerses = async (req: Request, res: Response): Promise<void> => {
  //   try {
  //     const chapterId = validateChapterId(req.params.id);
  //     const language = validateLanguage(req.query.language as string);

  //     Logger.info(`Fetching verses for chapter ${chapterId} in ${language}`);
  //     const verses = await this.quranService.getVerses(chapterId, language);

  //     const response: ApiResponse = {
  //       success: true,
  //       data: verses,
  //       timestamp: new Date().toISOString()
  //     };

  //     res.json(response);
  //   } catch (error) {
  //     Logger.error('Error fetching verses', error);
  //     this.handleError(res, error, 'Failed to fetch verses');
  //   }
  // };

  // search = async (req: Request, res: Response): Promise<void> => {
  //   try {
  //     const query = validateSearchQuery(req.query.q as string);
  //     const language = validateLanguage(req.query.language as string);

  //     Logger.info(`Searching for "${query}" in ${language}`);
  //     const results = await this.quranService.search(query, language);

  //     const response: ApiResponse = {
  //       success: true,
  //       data: results,
  //       timestamp: new Date().toISOString()
  //     };

  //     res.json(response);
  //   } catch (error) {
  //     Logger.error('Error searching', error);
  //     this.handleError(res, error, 'Search failed');
  //   }
  // };

  // private handleError(res: Response, error: any, defaultMessage: string): void {
  //   const statusCode = error instanceof ValidationError ? 400 : 500;
  //   const message = error instanceof ValidationError ? error.message : defaultMessage;

  //   const response: ApiResponse = {
  //     success: false,
  //     error: message,
  //     timestamp: new Date().toISOString()
  //   };

  //   res.status(statusCode).json(response);
  // }
}
