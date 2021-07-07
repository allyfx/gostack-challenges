import { getCustomRepository } from 'typeorm';

// import AppError from '../errors/AppError';

import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // Should be able to delete a transaction
    const transactionRepository = getCustomRepository(TransactionsRepository);

    await transactionRepository.delete(id);
  }
}

export default DeleteTransactionService;
