# Contributing to Little Learners Academy 🎓

Thank you for your interest in contributing to Little Learners Academy! We welcome contributions from developers, designers, and educators who share our passion for early childhood education.

## 🌟 How to Contribute

### 1. Fork the Repository
- Click the "Fork" button on the top right of this repository
- Clone your forked repository to your local machine

### 2. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 3. Make Your Changes
- Write clean, readable code
- Follow our coding standards
- Test your changes thoroughly
- Update documentation if needed

### 4. Commit Your Changes
```bash
git add .
git commit -m "Add: Brief description of your changes"
```

### 5. Push and Create Pull Request
```bash
git push origin feature/your-feature-name
```

## 📋 Development Guidelines

### Code Standards

#### React Components
- Use functional components with hooks
- Follow the component structure in `/src/components`
- Use descriptive component and file names
- Include PropTypes or TypeScript for type safety

#### CSS Styling
- Use CSS modules or styled-components
- Follow BEM methodology for class naming
- Use CSS custom properties for theming
- Ensure mobile-first responsive design

#### File Organization
```
src/
├── components/
│   └── ComponentName/
│       ├── ComponentName.jsx
│       ├── ComponentName.css
│       └── index.js
├── assets/
├── hooks/
├── utils/
└── constants/
```

### Naming Conventions

#### Files and Folders
- **Components**: PascalCase (e.g., `HeroSection.jsx`)
- **Files**: camelCase (e.g., `userProfile.js`)
- **Folders**: kebab-case (e.g., `hero-section/`)

#### Variables and Functions
- **Variables**: camelCase (e.g., `userName`, `isLoading`)
- **Functions**: camelCase (e.g., `handleClick`, `fetchData`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)

#### CSS Classes
- **BEM Methodology**: `.block__element--modifier`
- **Example**: `.hero-section__title--highlighted`

## 🧪 Testing

### Before Submitting
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on different screen sizes (mobile, tablet, desktop)
- [ ] Run `npm run lint` to check for code quality issues
- [ ] Ensure all existing tests pass
- [ ] Test your new features thoroughly

### Testing Checklist
- [ ] Component renders without errors
- [ ] Responsive design works on all breakpoints
- [ ] Accessibility features work correctly
- [ ] Performance is not negatively impacted
- [ ] Code follows project standards

## 🎨 Design Guidelines

### Color Palette
- **Primary Orange**: `#ff8d4c`
- **Light Orange**: `#ffbe99`
- **Light Peach**: `#ffefe5`
- **Dark Grey**: `#1a1a1a`
- **Medium Grey**: `#333333`

### Typography
- **Headings**: Raleway (Google Fonts)
- **Body Text**: Outfit (Google Fonts)
- **Font Weights**: 400, 500, 600, 700, 800

### Spacing
- Use consistent spacing scale (0.25rem, 0.5rem, 1rem, 1.5rem, 2rem, etc.)
- Follow 8px grid system
- Use CSS custom properties for consistent spacing

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Description**: Clear description of the bug
2. **Steps to Reproduce**: Detailed steps to reproduce the issue
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Screenshots**: If applicable
6. **Environment**: Browser, OS, device information

### Bug Report Template
```markdown
## Bug Description
Brief description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

## Expected Behavior
What you expected to happen

## Actual Behavior
What actually happened

## Screenshots
If applicable, add screenshots

## Environment
- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 91]
- Version: [e.g. 1.0.0]
```

## ✨ Feature Requests

When suggesting new features:

1. **Use Case**: Describe the problem you're trying to solve
2. **Proposed Solution**: How you think it should work
3. **Alternatives**: Other solutions you've considered
4. **Additional Context**: Any other relevant information

## 📝 Pull Request Guidelines

### PR Title Format
```
type(scope): brief description

Examples:
feat(hero): add animation to hero section
fix(nav): resolve mobile menu toggle issue
docs(readme): update installation instructions
```

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on multiple browsers
- [ ] Tested on different screen sizes
- [ ] All tests pass

## Screenshots
If applicable, add screenshots

## Checklist
- [ ] Code follows project standards
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

## 🏷️ Issue Labels

We use the following labels to categorize issues:

- `bug`: Something isn't working
- `enhancement`: New feature or request
- `documentation`: Improvements or additions to documentation
- `good first issue`: Good for newcomers
- `help wanted`: Extra attention is needed
- `question`: Further information is requested

## 💬 Communication

- **GitHub Issues**: For bug reports and feature requests
- **Pull Requests**: For code contributions
- **Discussions**: For general questions and ideas

## 🎯 Areas We Need Help With

- **Frontend Development**: React components, styling, animations
- **UI/UX Design**: User interface improvements, accessibility
- **Documentation**: Code documentation, user guides
- **Testing**: Unit tests, integration tests, e2e tests
- **Performance**: Optimization, bundle size reduction

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

## 📞 Questions?

If you have any questions about contributing, please:
1. Check existing issues and discussions
2. Create a new issue with the `question` label
3. Reach out to maintainers

---

Thank you for contributing to Little Learners Academy! Together, we're building a better future for early childhood education. 🌟
