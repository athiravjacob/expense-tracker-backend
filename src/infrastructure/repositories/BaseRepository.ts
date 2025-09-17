import { Model } from 'mongoose';
import { IBaseRepository } from '../../domain/repositories/IBaseRepository';

export abstract class BaseRepository<T> implements IBaseRepository<T> {
  protected model: Model<any>;

  constructor(model: Model<any>) {
    this.model = model;
  }

  async create(item: T): Promise<T> {
    const newItem = new this.model(item);
    return await newItem.save();
  }

  async find(filter: object): Promise<T[]> {
    return this.model.find(filter);
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }

  async update(id: string, item: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(id, item, { new: true });
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.model.findByIdAndDelete(id);
    return result != null;
  }
}
