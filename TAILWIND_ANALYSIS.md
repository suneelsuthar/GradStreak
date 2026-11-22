# Tailwind CSS Analysis - GradStreak Project

This document explains how Tailwind CSS classes are used in the GradStreak project and how they translate to CSS properties.

---

## 🎨 How Tailwind Works

Tailwind CSS is a **utility-first CSS framework**. Instead of writing custom CSS, you apply pre-built utility classes directly in your HTML/JSX. Each class does ONE thing.

### Example:
```jsx
<div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg">
```

This applies:
- `flex` → `display: flex`
- `items-center` → `align-items: center`
- `gap-4` → `gap: 1rem` (16px)
- `p-6` → `padding: 1.5rem` (24px)
- `bg-white` → `background-color: white`
- `rounded-xl` → `border-radius: 0.75rem` (12px)
- `shadow-lg` → `box-shadow: large shadow`

---

## 📐 Spacing System

Tailwind uses a **4px base unit**. Each number multiplies by 4px:

| Class | CSS Value | Pixels |
|-------|-----------|--------|
| `p-1` | `padding: 0.25rem` | 4px |
| `p-2` | `padding: 0.5rem` | 8px |
| `p-3` | `padding: 0.75rem` | 12px |
| `p-4` | `padding: 1rem` | 16px |
| `p-5` | `padding: 1.25rem` | 20px |
| `p-6` | `padding: 1.5rem` | 24px |
| `p-8` | `padding: 2rem` | 32px |
| `p-10` | `padding: 2.5rem` | 40px |
| `p-16` | `padding: 4rem` | 64px |
| `p-20` | `padding: 5rem` | 80px |

**Variants:**
- `px-4` → horizontal padding (left + right)
- `py-4` → vertical padding (top + bottom)
- `pt-4` → padding-top
- `pb-4` → padding-bottom
- `pl-4` → padding-left
- `pr-4` → padding-right

Same applies to margin with `m-*`, `mx-*`, `my-*`, `mt-*`, etc.

---

## 🔲 Layout Classes Used in GradStreak

### Flexbox
| Tailwind | CSS | Description |
|----------|-----|-------------|
| `flex` | `display: flex` | Flex container |
| `flex-col` | `flex-direction: column` | Stack vertically |
| `flex-row` | `flex-direction: row` | Stack horizontally |
| `flex-row-reverse` | `flex-direction: row-reverse` | Reverse horizontal |
| `flex-wrap` | `flex-wrap: wrap` | Allow wrapping |
| `flex-grow` | `flex-grow: 1` | Grow to fill space |
| `flex-1` | `flex: 1 1 0%` | Grow and shrink equally |
| `items-center` | `align-items: center` | Center vertically |
| `items-start` | `align-items: flex-start` | Align to start |
| `justify-center` | `justify-content: center` | Center horizontally |
| `justify-between` | `justify-content: space-between` | Space between |
| `gap-2` | `gap: 0.5rem` | 8px gap |
| `gap-4` | `gap: 1rem` | 16px gap |
| `gap-8` | `gap: 2rem` | 32px gap |

### Grid
| Tailwind | CSS | Description |
|----------|-----|-------------|
| `grid` | `display: grid` | Grid container |
| `grid-cols-1` | `grid-template-columns: repeat(1, minmax(0, 1fr))` | 1 column |
| `grid-cols-2` | `grid-template-columns: repeat(2, minmax(0, 1fr))` | 2 columns |
| `grid-cols-4` | `grid-template-columns: repeat(4, minmax(0, 1fr))` | 4 columns |
| `col-span-1` | `grid-column: span 1 / span 1` | Span 1 column |

---

## 📏 Sizing

| Tailwind | CSS | Description |
|----------|-----|-------------|
| `w-full` | `width: 100%` | Full width |
| `w-auto` | `width: auto` | Auto width |
| `w-1/2` | `width: 50%` | Half width |
| `w-5/12` | `width: 41.666667%` | 5/12 width |
| `w-[500px]` | `width: 500px` | Custom width |
| `h-8` | `height: 2rem` | 32px height |
| `h-44` | `height: 11rem` | 176px height |
| `h-full` | `height: 100%` | Full height |
| `min-h-screen` | `min-height: 100vh` | Full viewport height |
| `max-w-xl` | `max-width: 36rem` | 576px max width |
| `max-w-3xl` | `max-width: 48rem` | 768px max width |
| `max-w-7xl` | `max-width: 80rem` | 1280px max width |
| `max-w-[300px]` | `max-width: 300px` | Custom max width |

---

## 🎨 Colors Used in GradStreak

### Background Colors
| Tailwind | CSS | Usage |
|----------|-----|-------|
| `bg-white` | `background-color: #fff` | Main backgrounds |
| `bg-[#197C2C]` | `background-color: #197C2C` | Brand green |
| `bg-[#F8FAF9]` | `background-color: #F8FAF9` | Light gray bg |
| `bg-emerald-600` | `background-color: #059669` | Accent green |
| `bg-rose-600` | `background-color: #e11d48` | Problem/error |
| `bg-gray-100` | `background-color: #f3f4f6` | Light gray |
| `bg-white/10` | `background-color: rgba(255,255,255,0.1)` | Transparent white |
| `bg-gradient-to-br` | `background: linear-gradient(to bottom right, ...)` | Gradient |

### Text Colors
| Tailwind | CSS | Usage |
|----------|-----|-------|
| `text-white` | `color: #fff` | White text |
| `text-gray-900` | `color: #111827` | Dark text |
| `text-gray-700` | `color: #374151` | Medium dark |
| `text-gray-500` | `color: #6b7280` | Medium text |
| `text-gray-400` | `color: #9ca3af` | Light text |
| `text-emerald-600` | `color: #059669` | Brand accent |
| `text-rose-600` | `color: #e11d48` | Error/warning |
| `text-[#197C2C]` | `color: #197C2C` | Custom brand |
| `text-[#787878]` | `color: #787878` | Custom gray |

---

## 📝 Typography

| Tailwind | CSS | Description |
|----------|-----|-------------|
| `text-sm` | `font-size: 0.875rem` | 14px |
| `text-base` | `font-size: 1rem` | 16px |
| `text-lg` | `font-size: 1.125rem` | 18px |
| `text-xl` | `font-size: 1.25rem` | 20px |
| `text-2xl` | `font-size: 1.5rem` | 24px |
| `text-3xl` | `font-size: 1.875rem` | 30px |
| `text-4xl` | `font-size: 2.25rem` | 36px |
| `text-5xl` | `font-size: 3rem` | 48px |
| `text-7xl` | `font-size: 4.5rem` | 72px |
| `font-regular` | `font-weight: 400` | Normal weight |
| `font-medium` | `font-weight: 500` | Medium weight |
| `font-semibold` | `font-weight: 600` | Semi bold |
| `font-bold` | `font-weight: 700` | Bold |
| `leading-tight` | `line-height: 1.25` | Tight leading |
| `leading-relaxed` | `line-height: 1.625` | Relaxed leading |
| `tracking-tight` | `letter-spacing: -0.025em` | Tight tracking |
| `tracking-wider` | `letter-spacing: 0.05em` | Wide tracking |
| `uppercase` | `text-transform: uppercase` | Uppercase text |
| `text-center` | `text-align: center` | Center align |

---

## 🔲 Borders & Rounded Corners

| Tailwind | CSS | Description |
|----------|-----|-------------|
| `border` | `border-width: 1px` | Default border |
| `border-t` | `border-top-width: 1px` | Top border |
| `border-4` | `border-width: 4px` | 4px border |
| `border-gray-100` | `border-color: #f3f4f6` | Light gray border |
| `border-gray-200` | `border-color: #e5e7eb` | Gray border |
| `rounded` | `border-radius: 0.25rem` | 4px radius |
| `rounded-lg` | `border-radius: 0.5rem` | 8px radius |
| `rounded-xl` | `border-radius: 0.75rem` | 12px radius |
| `rounded-2xl` | `border-radius: 1rem` | 16px radius |
| `rounded-3xl` | `border-radius: 1.5rem` | 24px radius |
| `rounded-full` | `border-radius: 9999px` | Pill shape |
| `rounded-[22px]` | `border-radius: 22px` | Custom radius |
| `rounded-[32px]` | `border-radius: 32px` | Custom radius |

---

## 🎭 Effects & Transforms

| Tailwind | CSS | Description |
|----------|-----|-------------|
| `shadow-sm` | Small shadow | Subtle elevation |
| `shadow-lg` | Large shadow | More elevation |
| `shadow-xl` | Extra large shadow | High elevation |
| `shadow-2xl` | 2XL shadow | Maximum elevation |
| `drop-shadow-md` | Filter shadow | Drop shadow effect |
| `drop-shadow-2xl` | Large drop shadow | Strong drop shadow |
| `opacity-0` | `opacity: 0` | Invisible |
| `opacity-5` | `opacity: 0.05` | Very faint |
| `opacity-10` | `opacity: 0.1` | Faint |
| `opacity-20` | `opacity: 0.2` | Light |
| `opacity-90` | `opacity: 0.9` | Nearly opaque |
| `blur-2xl` | `filter: blur(40px)` | Strong blur |
| `backdrop-blur` | `backdrop-filter: blur(8px)` | Background blur |
| `scale-90` | `transform: scale(0.9)` | 90% scale |
| `scale-105` | `transform: scale(1.05)` | 105% scale |
| `rotate-1` | `transform: rotate(1deg)` | Slight rotation |
| `translate-y-0` | `transform: translateY(0)` | No Y translation |
| `-translate-x-1/2` | `transform: translateX(-50%)` | Center horizontally |
| `-translate-y-full` | `transform: translateY(-100%)` | Move up by full height |

---

## 📱 Responsive Breakpoints

Tailwind uses **mobile-first** responsive design. Classes without prefix apply to all screens.

| Prefix | Min Width | Description |
|--------|-----------|-------------|
| (none) | 0px | Mobile and up (default) |
| `sm:` | 640px | Small screens and up |
| `md:` | 768px | Medium screens and up |
| `lg:` | 1024px | Large screens and up |
| `xl:` | 1280px | Extra large and up |
| `2xl:` | 1536px | 2XL and up |

### Examples from GradStreak:
```jsx
// Hide on mobile, show on medium+
className="hidden md:flex"

// Different text size on different screens
className="text-4xl md:text-5xl"

// Different padding
className="p-6 sm:p-8 md:p-20"

// Different grid columns
className="grid-cols-1 lg:grid-cols-2"
className="grid-cols-1 sm:grid-cols-3"
```

---

## 🔄 Transitions & Hover States

| Tailwind | CSS | Description |
|----------|-----|-------------|
| `transition-all` | All properties transition | General transitions |
| `transition-colors` | Color properties transition | Color transitions |
| `transition-transform` | Transform transitions | Movement/scale |
| `transition-opacity` | Opacity transitions | Fade effects |
| `duration-300` | `transition-duration: 300ms` | 0.3s duration |
| `duration-500` | `transition-duration: 500ms` | 0.5s duration |
| `hover:bg-gray-50` | On hover, gray background | Hover state |
| `hover:text-emerald-600` | On hover, green text | Hover state |
| `hover:scale-105` | On hover, 105% scale | Zoom effect |
| `hover:shadow-md` | On hover, medium shadow | Elevation on hover |
| `hover:underline` | On hover, underline | Link hover |
| `group-hover:opacity-30` | When parent with `group` is hovered | Group hover |
| `group-hover:stroke-current` | Stroke color on group hover | SVG hover |

---

## 📍 Positioning

| Tailwind | CSS | Description |
|----------|-----|-------------|
| `relative` | `position: relative` | Relative positioning |
| `absolute` | `position: absolute` | Absolute positioning |
| `fixed` | `position: fixed` | Fixed positioning |
| `sticky` | `position: sticky` | Sticky positioning |
| `top-0` | `top: 0` | At top |
| `bottom-0` | `bottom: 0` | At bottom |
| `left-0` | `left: 0` | At left |
| `right-0` | `right: 0` | At right |
| `left-1/2` | `left: 50%` | Center left |
| `-bottom-28` | `bottom: -7rem` | Negative bottom |
| `inset-0` | `top:0;right:0;bottom:0;left:0` | All sides 0 |
| `z-10` | `z-index: 10` | Z order 10 |
| `z-40` | `z-index: 40` | Z order 40 |
| `z-50` | `z-index: 50` | Z order 50 |

---

## 🎯 Common Patterns in GradStreak

### Container Pattern
```jsx
<div className="container mx-auto px-4">
  {/* Content centered with max-width and responsive padding */}
</div>
```

### Card Pattern
```jsx
<div className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-shadow">
  {/* Card content */}
</div>
```

### Button Pattern
```jsx
<button className="inline-flex items-center gap-2 rounded-full bg-[#197C2C] text-white px-6 py-3 font-semibold hover:bg-emerald-700 transition-colors">
  Button Text
</button>
```

### Responsive Grid Pattern
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {/* Grid items */}
</div>
```

### Overlay Gradient Pattern
```jsx
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
```

---

## 🔧 Arbitrary Values

Tailwind allows custom values using square brackets:

```jsx
className="bg-[#197C2C]"      // Custom color
className="w-[500px]"          // Custom width
className="max-w-[300px]"      // Custom max-width
className="rounded-[22px]"     // Custom border-radius
className="h-[60px]"           // Custom height
className="mt-[170px]"         // Custom margin
```

This is how GradStreak uses the brand color `#197C2C` throughout the app.

---

## 📚 Summary

The GradStreak project uses Tailwind for:
1. **Rapid prototyping** - No switching between HTML and CSS files
2. **Consistent spacing** - 4px unit system
3. **Responsive design** - Mobile-first with breakpoint prefixes
4. **Component patterns** - Reusable class combinations
5. **Custom branding** - Arbitrary values for brand colors

All styling in the components (`home.tsx`, `about.tsx`, `features.tsx`, `Navbar.tsx`, `Footer.tsx`) follows these Tailwind patterns.
