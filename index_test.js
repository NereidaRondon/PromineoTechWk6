var expect = chai.expect;
const arr1 = [1, 2, 3, 14, 15, 16]
const arr2 = [1, 2, 3, 14, 15, 16]

describe("CardShuffle", function(){
    describe("#shuffle", function(){
        it("should sort all elements in array", function(){
            var x = shuffle(arr1);
            expect(x).to.have.all.members(arr2);
            //expect(x).to.eql(arr2);  //← test fails, as it should
        });
        it("should throw an error if arrays have the same order", function(){
            expect(function () {
            shuffle(arr1).to.eql(arr2);
            }).to.throw(Error);
        })
    })
});



