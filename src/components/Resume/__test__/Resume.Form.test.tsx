/* eslint-disable jest/expect-expect */

import { cleanup, render, screen } from '@testing-library/react';
import Resume from '../Resume';
import userEvent from '@testing-library/user-event';

describe('Form component', () => {
  afterEach(cleanup);

  const inptTextTest = (
    nameOfGroup: HTMLElement[],
    toHaveValue: string
  ): void => {
    nameOfGroup.forEach((inptText: HTMLElement) => {
      let toHaveValueDiff = '';
      toHaveValueDiff += `${toHaveValue}, `;
      userEvent.type(inptText, toHaveValueDiff);
    });

    nameOfGroup.forEach((inptText: HTMLElement) => {
      let toHaveValueDiff = '';
      expect(inptText).not.toHaveValue(toHaveValueDiff);
      toHaveValueDiff += `${toHaveValue}, `;
      expect(inptText).toHaveValue(toHaveValueDiff);
    });
  };

  const inptGroupTextTest = (
    nameOfGroup: HTMLElement[][],
    toHaveValue: string,
    toHaveLength: number
  ): void => {
    nameOfGroup.forEach((inptGroup: HTMLElement[]) =>
      expect(inptGroup).toHaveLength(toHaveLength)
    );
    2;
    nameOfGroup.forEach((inptGroup: HTMLElement[]) => {
      let toHaveValueDiff = '';
      inptGroup.forEach((inptText: HTMLElement) => {
        toHaveValueDiff += `${toHaveValue}, `;
        userEvent.type(inptText, toHaveValueDiff);
      });
    });

    nameOfGroup.forEach((inptGroup: HTMLElement[]) => {
      let toHaveValueDiff = '';
      inptGroup.forEach((inptText: HTMLElement) => {
        expect(inptText).not.toHaveValue(toHaveValueDiff);
        toHaveValueDiff += `${toHaveValue}, `;
        expect(inptText).toHaveValue(toHaveValueDiff);
      });
    });
  };

  test('expect Form component ButtonReset to reset all default Input fields to empty', () => {
    render(<Resume />);

    const inptFirst = screen.getByPlaceholderText('first name');
    const inptLast = screen.getByPlaceholderText('last name');
    const inptTitle = screen.getByPlaceholderText('title');
    const inptAddress = screen.getByPlaceholderText('address');
    const inptPhone = screen.getByPlaceholderText('phone number');
    const inptEmail = screen.getByPlaceholderText('email');
    const inptAbout = screen.getByPlaceholderText('about');

    const inptPosition = screen.getByPlaceholderText('position');
    const inptCompany = screen.getByPlaceholderText('company');

    const inptUniversity = screen.getByPlaceholderText('university');
    const inptDegree = screen.getByPlaceholderText('degree');

    const inptDate = screen.getAllByPlaceholderText('date');
    const inptDescription = screen.getAllByPlaceholderText('description');

    const inptTextUnique = [
      inptFirst,
      inptLast,
      inptTitle,
      inptAddress,
      inptPhone,
      inptEmail,
      inptAbout,
      inptPosition,
      inptCompany,
      inptUniversity,
      inptDegree
    ];
    const inptTextCommon = [inptDate, inptDescription];

    inptTextTest(inptTextUnique, 'i hecking love emma watson');
    inptGroupTextTest(inptTextCommon, 'i hecking love emma watson', 2);

    const buttonReset = screen.getByText('reset');

    userEvent.click(buttonReset);

    inptTextUnique.forEach((inputText) => expect(inputText).toHaveValue(''));

    inptTextCommon.forEach((inputGroup) =>
      inputGroup.forEach((inputText) => expect(inputText).toHaveValue(''))
    );
  });

  test('expect Form component ButtonReset to reset all created Input fields to empty', () => {
    render(<Resume />);

    const expButtonAdd = screen.getByText('add experience');
    const eduButtonAdd = screen.getByText('add education');

    for (let i = 0; i < 3; i++) {
      userEvent.click(expButtonAdd);
      userEvent.click(eduButtonAdd);
    }

    const inptPosition = screen.getAllByPlaceholderText('position');
    const inptCompany = screen.getAllByPlaceholderText('company');

    const inptUniversity = screen.getAllByPlaceholderText('university');
    const inptDegree = screen.getAllByPlaceholderText('degree');

    const inptDate = screen.getAllByPlaceholderText('date');
    const inptDescription = screen.getAllByPlaceholderText('description');

    const inptTextUnique = [
      inptPosition,
      inptCompany,
      inptUniversity,
      inptDegree
    ];
    const inptTextCommon = [inptDate, inptDescription];

    inptGroupTextTest(inptTextUnique, 'i hecking love emma watson', 4);
    inptGroupTextTest(inptTextCommon, 'i hecking love emma watson', 8);

    const buttonReset = screen.getByText('reset');

    userEvent.click(buttonReset);

    inptTextUnique.forEach((inputGroup) =>
      inputGroup.forEach((inputText) => expect(inputText).toHaveValue(''))
    );

    inptTextCommon.forEach((inputGroup) =>
      inputGroup.forEach((inputText) => expect(inputText).toHaveValue(''))
    );
  });

  describe('FormPersonal component', () => {
    test('expect FormPersonal Input and TextArea components values to update', () => {
      render(<Resume />);

      const inptFirst = screen.getByPlaceholderText('first name');
      const inptLast = screen.getByPlaceholderText('last name');
      const inptTitle = screen.getByPlaceholderText('title');
      const inptAddress = screen.getByPlaceholderText('address');
      const inptPhone = screen.getByPlaceholderText('phone number');
      const inptEmail = screen.getByPlaceholderText('email');
      const inptAbout = screen.getByPlaceholderText('about');

      const inptTextUnique = [
        inptFirst,
        inptLast,
        inptTitle,
        inptAddress,
        inptPhone,
        inptEmail,
        inptAbout
      ];

      inptTextTest(inptTextUnique, 'i hecking love emma watson');
    });
  });

  describe('FormExperience and FormEducation components', () => {
    test('expect FormExperience ButtonAdd to create a FormExperienceGroup', () => {
      render(<Resume />);

      const expButtonAdd = screen.getByText('add experience');

      userEvent.click(expButtonAdd);
      userEvent.click(expButtonAdd);
      userEvent.click(expButtonAdd);
      userEvent.click(expButtonAdd);

      const inptPosition = screen.getAllByPlaceholderText('position');

      expect(inptPosition).toHaveLength(5);
    });

    test('expect FormEducation ButtonAdd to create a FormEducationGroup', () => {
      render(<Resume />);

      const eduButtonAdd = screen.getByText('add education');

      userEvent.click(eduButtonAdd);
      userEvent.click(eduButtonAdd);
      userEvent.click(eduButtonAdd);
      userEvent.click(eduButtonAdd);

      const inptUniversity = screen.getAllByPlaceholderText('university');

      expect(inptUniversity).toHaveLength(5);
    });
  });

  describe('FormExperienceGroup and FormEducationGroup components', () => {
    describe('FormExperienceGroup component', () => {
      test('expect FormExperienceGroup Input and TextArea components values to update', () => {
        render(<Resume />);

        const expButtonAdd = screen.getByText('add experience');

        for (let i = 0; i < 4; i++) userEvent.click(expButtonAdd);

        const inptPosition = screen.getAllByPlaceholderText('position');
        const inptCompany = screen.getAllByPlaceholderText('company');

        const inptDate = screen.getAllByPlaceholderText('date');
        const inptDescription = screen.getAllByPlaceholderText('description');

        const inptTextUnique = [inptPosition, inptCompany];
        const inptTextCommon = [inptDate, inptDescription];

        inptGroupTextTest(inptTextUnique, 'i hecking love emma watson', 5);
        inptGroupTextTest(inptTextCommon, 'i hecking love emma watson', 6);
      });

      test('expect FormExperienceGroup ButtonRemove to remove all FormExperienceGroups', () => {
        render(
          <Resume
            form={{
              attrs: { rtlTestID: { btn: { experience: 'btn--experience' } } }
            }}
          />
        );

        const expButtonAdd = screen.getByText('add experience');

        for (let i = 0; i < 4; i++) userEvent.click(expButtonAdd);

        const expButtonRemove = screen.queryAllByTestId('btn--experience');

        expect(expButtonRemove).toHaveLength(5);

        for (let i = expButtonRemove.length - 1; i >= 2; i--)
          userEvent.click(expButtonRemove[i]);

        const expButtonRemoveReQuery =
          screen.queryAllByTestId('btn--experience');

        expect(expButtonRemoveReQuery).toHaveLength(2);
      });

      test('expect FormExperienceGroup ButtonRemove to remove a FormExperienceGroup', () => {
        render(
          <Resume
            form={{
              attrs: { rtlTestID: { btn: { experience: 'btn--experience' } } }
            }}
          />
        );

        const expButtonAdd = screen.getByText('add experience');

        for (let i = 0; i < 4; i++) userEvent.click(expButtonAdd);

        const inptPosition = screen.getAllByPlaceholderText('position');

        const inptTextUnique = [inptPosition];

        inptGroupTextTest(inptTextUnique, 'i hecking love emma watson', 5);

        expect(inptTextUnique[0][2]).toHaveValue(
          'i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, '
        );

        expect(inptTextUnique[0][3]).toHaveValue(
          'i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, '
        );

        const expButtonRemove = screen.queryAllByTestId('btn--experience');

        userEvent.click(expButtonRemove[2]);

        expect(inptTextUnique[0][2]).not.toHaveValue(
          'i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, '
        );

        expect(inptTextUnique[0][2]).toHaveValue(
          'i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, '
        );
      });
    });

    describe('FormEducationGroup component', () => {
      test('expect FormEducation Input and TextArea components values to update', () => {
        render(<Resume />);

        const eduButtonAdd = screen.getByText('add education');

        for (let i = 0; i < 4; i++) userEvent.click(eduButtonAdd);

        const inptUniversity = screen.getAllByPlaceholderText('university');
        const inptDegree = screen.getAllByPlaceholderText('degree');

        const inptDate = screen.getAllByPlaceholderText('date');
        const inptDescription = screen.getAllByPlaceholderText('description');

        const inptTextUnique = [inptUniversity, inptDegree];
        const inptTextCommon = [inptDate, inptDescription];

        inptGroupTextTest(inptTextUnique, 'i hecking love emma watson', 5);
        inptGroupTextTest(inptTextCommon, 'i hecking love emma watson', 6);
      });

      test('expect FormEducationGroup ButtonRemove to remove all FormEducationGroups', () => {
        render(
          <Resume
            form={{
              attrs: { rtlTestID: { btn: { education: 'btn--education' } } }
            }}
          />
        );

        const eduButtonAdd = screen.getByText('add education');

        for (let i = 0; i < 4; i++) userEvent.click(eduButtonAdd);

        const eduButtonRemove = screen.queryAllByTestId('btn--education');

        expect(eduButtonRemove).toHaveLength(5);

        for (let i = eduButtonRemove.length - 1; i >= 0; i--)
          userEvent.click(eduButtonRemove[i]);

        const eduButtonRemoveReQuery =
          screen.queryAllByTestId('btn--education');

        expect(eduButtonRemoveReQuery).toHaveLength(0);
      });

      test('expect FormEducationGroup ButtonRemove to remove a FormEducationGroup', () => {
        render(
          <Resume
            form={{
              attrs: { rtlTestID: { btn: { education: 'btn--education' } } }
            }}
          />
        );

        const eduButtonAdd = screen.getByText('add education');

        for (let i = 0; i < 4; i++) userEvent.click(eduButtonAdd);

        const inptUniversity = screen.getAllByPlaceholderText('university');

        const inptTextUnique = [inptUniversity];

        inptGroupTextTest(inptTextUnique, 'i hecking love emma watson', 5);

        expect(inptTextUnique[0][2]).toHaveValue(
          'i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, '
        );

        expect(inptTextUnique[0][3]).toHaveValue(
          'i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, '
        );

        const eduButtonRemove = screen.queryAllByTestId('btn--education');

        userEvent.click(eduButtonRemove[2]);

        expect(inptTextUnique[0][2]).not.toHaveValue(
          'i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, '
        );

        expect(inptTextUnique[0][2]).toHaveValue(
          'i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, i hecking love emma watson, '
        );
      });
    });
  });
});
