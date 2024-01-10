'use client';
import { useState } from 'react';
import './input.css';
import { foods, filterItems } from './data.js';
import { FilterableList } from './food.tsx'

export default function App() {
    return FilterableList();
}
