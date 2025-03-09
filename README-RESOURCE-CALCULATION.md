# Resource Calculation Branch

This branch contains updates and improvements to the resource calculation systems in Middle Age Multiverse.

## Changes Implemented

1. **Fixed Type Checking:**
   - Improved type checking in `formatResourceValue` function
   - Added null checks to prevent errors when processing resource objects
   - Explicit number conversion to handle edge cases

2. **Enhanced Sleep Calculation:**
   - Improved sleep hour calculation with proper type checking
   - Made sleep deprivation effects more robust against invalid inputs

3. **Code Improvements:**
   - Used optional chaining in storage utilities
   - Removed unused variables from game loop
   - Fixed redundant conditions in resource processing
   - Added documentation for resource calculation

4. **New Documentation:**
   - Created comprehensive RESOURCE_CALCULATIONS.md to explain all formulas
   - Added hours per week display for time allocation activities
   - Improved code maintainability and readability

## Resource Calculation Logic

The resource calculation system is now more robust with the following improvements:

- Clear separation between time allocation and resource effects
- Proper type checking for numeric inputs
- Better handling of edge cases (null/undefined values)
- More informative display of resource consumption
- Improved sleep deprivation mechanics with proper validation

## How to Use This Branch

```bash
# Clone the repository (if you haven't already)
git clone https://github.com/Montster27/V10.git

# Navigate to the simplified directory
cd V10/simplified

# Switch to the resource-calculation branch
git checkout resource-calculation

# Install dependencies
npm install

# Start the development server
npm start
```

## Next Steps

1. Expand resource calculation documentation
2. Add more detailed feedback on resource consumption
3. Implement visual indicators for resource status
4. Create resource visualization graphs
