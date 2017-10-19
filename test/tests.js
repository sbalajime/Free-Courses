const assert = require('assert');

// describe('Array', function () {
// 	describe('#indexOf()', function () {
// 		it('should return -1 when the value is not present', function () {
// 			assert.equal(-1, [1, 2, 3].indexOf(4));
// 		});
// 	});
// });

describe('courses.json', function () {
	const categories = require('../src/data/courses.json');
	describe('type of categories', function () {
		it('should return object', function () {
			assert.equal('object', (typeof categories));
		});
	});
	describe('title of categories', function () {
		it('should return true if all categories has a title', function () {
			let result = categories.every((category) => {
				return typeof category.title === 'string';
			});
			assert.equal(true, result);
		});
	});
});

describe('courses.json', function () {
	const courses = require('../src/data/courses.json');
	describe('type of courses', function () {
		it('should return object', function () {
			assert.equal('object', (typeof courses));
		});
	});
	describe('courses properties', function () {
		it('should return true if all courses has a title', function () {
			let result = courses.every((category) => {
				return typeof category.title === 'string';
			});
			assert.equal(true, result);
		});
		it('should return true if all courses has a author', function () {
			let result = courses.every((category) => {
				return typeof category.author === 'string';
			});
			assert.equal(true, result);
		});
		it('should return true if all courses has a language', function () {
			let result = courses.every((category) => {
				return typeof category.language === 'string';
			});
			assert.equal(true, result);
		});
		it('should return true if all courses has a link', function () {
			let result = courses.every((category) => {
				return typeof category.link === 'string';
			});
			assert.equal(true, result);
		});
		it('should return true if all courses has a level', function () {
			let result = courses.every((category) => {
				return typeof category.level === 'string';
			});
			assert.equal(true, result);
		});
		it('should return true if all courses has a description', function () {
			let result = courses.every((category) => {
				return typeof category.description === 'string';
			});
			assert.equal(true, result);
		});
		it('should return true if all courses has a category', function () {
			let result = courses.every((category) => {
				return category.categories.length > 0;
			});
			assert.equal(true, result);
		});
	});
});
