import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

// type for children node
export type IChildren = ReactNode;

// interfaces for static data

// interface links
export interface ILink {
  id: number;
  name: string;
  href: string;
}

// interfaces bussiensis

// interface product
export interface IProduct {
  _id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  stock: number;
  price: number;
  discount?: number;
}

export interface ICardItem extends IProduct {
  quantity?: number;
}

// ui components interfaces

// interface button component
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: IChildren;
  className?: string;
}

// interface input component
export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  className?: string;
}


// Actions

// interface form input
export interface IFormInput {
  title: string;
  description: string;
  category: string;
  image: string;
  stock: number;
  price: number;
  discount?: number;
}

// interface form input
export interface IUserFormInput {
  name?: string;
  email: string;
  password: string;
}