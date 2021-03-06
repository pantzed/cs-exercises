'use strict';

var expect = require('chai').expect;
const level1 = require('../../src/trees/level1');
const level2 = require('../../src/trees/level2');
const level3 = require('../../src/trees/level3');

describe('Trees', () => {
  describe('Level One', () => {
    describe('#treeCount', () => {
      it('Returns the count for an simple tree', () => {
        expect(level1.treeCount({
          value: 4,
          children: []
        })).to.be.equal(1);
      });

      it('Returns the count for a more complex tree', () => {
        expect(level1.treeCount({
          value: 4,
          children: [{
            value: 2,
            children: [{
              value: 6,
              children: []
            }]
          }, {
            value: 1,
            children: []
          }]
        })).to.be.equal(4);
      });
    });

    describe('#binTreeCount', () => {
      it('Returns the count for an empty binary tree', () => {
        expect(level1.binTreeCount(null)).to.be.equal(0);
      });

      it('Returns the count for a more complex binary tree', () => {
        expect(level1.binTreeCount({
          value: 4,
          left: {
            value: 2,
            left: {
              value: 6,
              left: null,
              right: null
            },
            right: null
          },
          right: {
            value: 2,
            left: {
              value: 6,
              left: null,
              right: null
            },
            right: null
          }
        })).to.be.equal(5);
      });
    });

    describe('#treeHeight', () => {
      it('Returns the height for an simple tree', () => {
        expect(level1.treeHeight({
          value: 4,
          children: []
        })).to.be.equal(1);
      });

      it('Returns the height for a more complex tree', () => {
        expect(level1.treeHeight({
          value: 4,
          children: [{
            value: 2,
            children: [{
              value: 6,
              children: []
            }]
          }, {
            value: 1,
            children: []
          }]
        })).to.be.equal(3);
      });
    });

    describe('#binTreeHeight', () => {
      it('Returns the height for an empty binary tree', () => {
        expect(level1.binTreeHeight(null)).to.be.equal(0);
      });

      it('Returns the height for a more complex binary tree', () => {
        expect(level1.binTreeHeight({
          value: 4,
          left: {
            value: 2,
            left: null,
            right: null
          },
          right: {
            value: 2,
            left: {
              value: 6,
              left: null,
              right: null
            },
            right: null
          }
        })).to.be.equal(3);
      });
    });

    describe('#sumTree', () => {
      it('Returns the sum for an simple tree', () => {
        expect(level1.sumTree({
          value: 4,
          children: []
        })).to.be.equal(4);
      });

      it('Returns the sum for a more complex tree', () => {
        expect(level1.sumTree({
          value: 4,
          children: [{
            value: 2,
            children: [{
              value: 6,
              children: []
            }]
          }, {
            value: 1,
            children: []
          }]
        })).to.be.equal(13);
      });
    });

    describe('#sumBinTree', () => {
      it('Returns the sum for an empty binary tree', () => {
        expect(level1.sumBinTree(null)).to.be.equal(0);
      });

      it('Returns the sum for a more complex binary tree', () => {
        expect(level1.sumBinTree({
          value: 4,
          left: {
            value: 2,
            left: null,
            right: null
          },
          right: {
            value: 2,
            left: {
              value: 6,
              left: null,
              right: null
            },
            right: null
          }
        })).to.be.equal(14);
      });
    });
  });

  describe('Level Two', () => {
    describe('#toArray', () => {
      it('Returns an empty array for an empty BST', () => {
        expect(level2.toArray(null)).to.be.eql([]);
      });

      it('Returns a proper array for a more complex tree', () => {
        expect(level2.toArray({
          value: 6,
          left: {
            value: 2,
            left: null,
            right: {
              value: 4,
              left: null,
              right: null
            }
          },
          right: {
            value: 12,
            right: null,
            left: {
              value: 10,
              left: null,
              right: null
            }
          },
        })).to.be.eql([2, 4, 6, 10, 12]);
      });
    });

    describe('#findValueInTree', () => {
      it('Returns true for a value in a tree', () => {
        expect(level2.findValueInTree({
          value: 4,
          children: [{
            value: 2,
            children: [{
              value: 6,
              children: []
            }]
          }, {
            value: 1,
            children: []
          }]
        }, 2)).to.be.equal(true);
      });

      it('Returns false for a value not in a tree', () => {
        expect(level2.findValueInTree({
          value: 4,
          children: [{
            value: 2,
            children: [{
              value: 6,
              children: []
            }]
          }, {
            value: 1,
            children: []
          }]
        }, 9)).to.be.equal(false);
      });
    });

    describe('#findValueInBinTree', () => {
      it('Returns true for a value in a tree', () => {
        expect(level2.findValueInBinTree({
          value: 4,
          left: {
            value: 2,
            left: {
              value: 6,
              left: null,
              right: null
            },
            right: null
          },
          right: {
            value: 2,
            left: {
              value: 6,
              left: null,
              right: null
            },
            right: null
          }
        }, 2)).to.be.equal(true);
      });

      it('Returns false for a value not in a tree', () => {
        expect(level2.findValueInBinTree({
          value: 4,
          left: {
            value: 2,
            left: {
              value: 6,
              left: null,
              right: null
            },
            right: null
          },
          right: {
            value: 2,
            left: {
              value: 6,
              left: null,
              right: null
            },
            right: null
          }
        }, 9)).to.be.equal(false);
      });
    });

    describe('#findValueInBinSearchTree', () => {
      it('Returns true for a value in a tree', () => {
        expect(level2.findValueInBinSearchTree({
          value: 6,
          left: {
            value: 2,
            left: null,
            right: {
              value: 4,
              left: null,
              right: null
            }
          },
          right: {
            value: 12,
            right: null,
            left: {
              value: 10,
              left: null,
              right: null
            }
          },
        }, 2)).to.be.equal(true);
      });

      it('Returns false for a value not in a tree', () => {
        expect(level2.findValueInBinSearchTree({
          value: 6,
          left: {
            value: 2,
            left: null,
            right: {
              value: 4,
              left: null,
              right: null
            }
          },
          right: {
            value: 12,
            right: null,
            left: {
              value: 10,
              left: null,
              right: null
            }
          },
        }, 9)).to.be.equal(false);
      });
    });

    describe('#insertValueInBinSearchTree', () => {
      it('Inserts value in an empty binary search tree', () => {
        expect(level2.insertValueInBinSearchTree(null, 9)).to.be.eql({
          value: 9,
          left: null,
          right: null
        });
      });

      it('Inserts value in binary search tree', () => {
        expect(level2.insertValueInBinSearchTree({
          value: 6,
          left: {
            value: 2,
            left: null,
            right: {
              value: 4,
              left: null,
              right: null
            }
          },
          right: {
            value: 12,
            right: null,
            left: {
              value: 10,
              left: null,
              right: null
            }
          },
        }, 5)).to.be.eql({
          value: 6,
          left: {
            value: 2,
            left: null,
            right: {
              value: 4,
              left: null,
              right: {
                value: 5,
                left: null,
                right: null
              }
            }
          },
          right: {
            value: 12,
            right: null,
            left: {
              value: 10,
              left: null,
              right: null
            }
          },
        });
      });
    });
  });

  describe('Level Three', () => {
    describe('#isBST', () => {
      it('Confirms that NULL is, in fact, a BST', () => {
        expect(level3.isBST(null)).to.be.eql(true);
      });
      it('Returns true if a Binary Tree is, in fact, a BST', () => {
        expect(level3.isBST({
          value: 6,
          left: {
            value: 2,
            left: null,
            right: {
              value: 4,
              left: null,
              right: null
            }
          },
          right: {
            value: 12,
            right: null,
            left: {
              value: 10,
              left: null,
              right: null
            }
          },
        })).to.be.eql(true);
      });
      it('Returns false if a Binary Tree is not a BST.', () => {
        expect(level3.isBST({
          value: 6,
          left: {
            value: 2,
            left: null,
            right: {
              value: 4,
              left: null,
              right: null
            }
          },
          right: {
            value: 12,
            right: null,
            left: {
              value: 10,
              left: {
                value: 4,
                left: null,
                right: null
              },
              right: null
            }
          },
        })).to.be.eql(false);
      });
    });
    describe('#isBalanced', () => {
      it('Confirms that NULL is a beautiful balanced BST', () => {
        expect(level3.isBalanced(null)).to.be.eql(true);
      });
      it('Returns true if a Binary Tree is, balanced', () => {
        expect(level3.isBalanced({
          value: 6,
          left: {
            value: 2,
            left: null,
            right: {
              value: 4,
              left: null,
              right: null
            }
          },
          right: {
            value: 12,
            right: null,
            left: {
              value: 10,
              left: null,
              right: null
            }
          },
        })).to.be.eql(true);
      });
      it('Returns false if a Binary Tree is not balanced.', () => {
        expect(level3.isBalanced({
          value: 6,
          left: {
            value: 2,
            left: null,
            right: {
              value: 4,
              left: null,
              right: null
            }
          },
          right: {
            value: 12,
            right: null,
            left: {
              value: 10,
              left: {
                value: 9,
                left: {
                  value: 8,
                  left: null,
                  right: null
                },
                right: null
              },
              right: null
            }
          },
        })).to.be.eql(false);
      });
    });
  });
});
