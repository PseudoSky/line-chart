describe('Line series', function() {
  beforeEach(function() {
    browser.get('http://localhost:1234/test/e2e/test_cases/line_series/');
  });

  it('should generate a graph', function() {
    expect(element(by.css('.chart')).isPresent()).toBe(true);
  });

  it('should have two lines with proper colors', function() {
    var lines = element.all(by.css('.chart .line-series'));
    expect(lines.count()).toBe(2);

    expect(lines.get(0)).toHaveExactClass('line-series mySeries0');
    expect(lines.get(1)).toHaveExactClass('line-series mySeries1');
  });
});