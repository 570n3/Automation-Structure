import { Locator } from "@playwright/test";

export class ComponentMapper {
  private mappings: { [key: string]: Locator };

  constructor(mappings: { [key: string]: Locator }) {
    this.mappings = mappings;
  }

  getComponentHeading(headingName: string): Locator {
    return this.mappings[headingName];
  }

  getComponentHeadings(headingNames: string[]): Locator[] {
    return headingNames.map(headingName => this.getComponentHeading(headingName));
  }
}
