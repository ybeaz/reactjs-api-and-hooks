
const 	assert 				= require('assert');
const 	learn 				= require('../js/r1HeadLearning');

const sum = (a, b) => { return a + b; };
	
describe('Learn test', function() {


	describe('Learn test A', function() {

	
		it('1   should be Ok', function() {
			
      
      
			expect( sum(2,3) ).toBe(5); //Work to be true
			
		});


    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });    
	
	});

});				

