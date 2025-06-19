import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num) {
  return new Intl.NumberFormat().format(num)
}

export function formatProgress(current, target) {
  return Math.min((current / target) * 100, 100).toFixed(1)
}

export function getProgressColor(percentage) {
  if (percentage >= 67) return 'bg-green-500'
  if (percentage >= 34) return 'bg-blue-500'
  return 'bg-blue-300'
}

export function getBadgeColor(badge) {
  switch (badge) {
    case 'gold': return 'bg-yellow-400 text-yellow-900'
    case 'silver': return 'bg-gray-300 text-gray-800'
    case 'bronze': return 'bg-orange-400 text-orange-900'
    default: return 'bg-gray-100 text-gray-600'
  }
}

export function validatePoints(points, available) {
  if (!points || points <= 0) return 'Points must be greater than 0'
  if (points > available) return 'Insufficient points available'
  return null
}