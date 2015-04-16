describe('Thermostat',function(){

  beforeEach(function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
  });

  it('displays default temperature', function(){
    expect('#temperature').toContainText('20');
  });

  it('increases temperature with up button', function(){
    $("#temperature_up").click();
    expect('#temperature').toContainText('21');
  });

  it('decreases temperature with down button', function(){
    $("#temperature_down").click();
    expect('#temperature').toContainText('19');
  });

  it('temperature can go up and down consistently', function(){
    $("#temperature_down").click();
    expect('#temperature').toContainText('19');
    $("#temperature_up").click();
    expect('#temperature').toContainText('20');
  });
});