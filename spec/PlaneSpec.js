describe('Plane', function(){
  var plane

  it('is flying when created', function(){
    plane = new Plane
    expect(plane.isFlying).toBe(true);
  });

});