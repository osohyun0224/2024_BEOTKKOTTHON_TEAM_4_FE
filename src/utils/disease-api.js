import { Images } from '@globalStyles';
import Image from 'next/image';

export const diseaseList = [
  {
    id: 1,
    iconsImage: Images.ico_vac1,
    vacName: '결핵',
    vacDes: '결핵은 결핵균(Mycobacterium tuberculosis)에 의한 공기매개 감염질환으로 폐를 침범할 뿐만 아니라 흉막, 림프절, 복부, 골 및 관절, 중추신경계, 비뇨생식기, 기도, 심낭 등 신체의 여러 부분을 침범하는 질환입니다.',
    qaList: [
      {
        id: 1,
        ques:'결핵은 어떻게 전파되나요?',
        ans:'호흡기 결핵 환자의 기침, 재채기 등을 통해 나오는 미세한 비말형태의 분비물을 통하여 다른 사람에게 전파됩니다.'
      },
      {
        id: 2,
        ques:'결핵의 증상은 무엇인가요?',
        ans:'열, 식욕부진, 체중감소, 야간발한 등의 전신증상이 있을 수 있습니다. 폐결핵의 경우 지속되는 기침, 가래, 객혈(가래에 피가 섞임) 등의 호흡기 증상이 있고 영아에서는 마른기침, 경한 호흡곤란이 가장 흔한 증상으로 나타납니다. 폐외결핵의 경우 발열, 식욕부진, 체중감소, 쇠약감, 오한 등의 전신증상과 감염부위의 통증 등의 국소증상이 나타날 수 있습니다'
      },
      {
        id: 3,
        ques:'결핵의 치료는 어떻게 하나요?',
        ans:'항결핵제를 복용하는 내과적 치료를 실시하며 수술과 같은 외과적 치료를 병행할 수 있습니다. 결핵이 발병한 사람은 의사의 지시에 따라 치료효과와 부작용에 대한 검사를 정기적으로 받고, 처방된 약을 꾸준히 복용해야 내성균 발현을 막고 결핵을 완치할 수 있습니다.'
      },
      {
        id: 4,
        ques:'결핵은 어떻게 예방하나요?',
        ans:'BCG 예방접종을 통해 결핵을 예방할 수 있습니다.'
      }
    ]
  },
  {
    id: 2,
    iconsImage: Images.ico_vac2,
    vacName: 'B형간염',
    vacDes: 'B형간염 바이러스(Hepatitis B virus, HBV)에 감염되어 간에 염증이 발생하는 질환으로 경과에 따라 급성과 만성으로 구별할 수 있습니다. 급성 B형간염 중 5~10%가 만성 B형간염으로 진행되며 만성 B형간염이 지속되면 간경화증이나 간세포암으로 진행할 수 있습니다. 예방접종으로 국내 B형간염 바이러스 보유자가 많이 감소하였지만 미국 및 유럽의 여러 국가에 비해 아직도 많이 발생하고 있습니다.',
    qaList: [
      {
        id: 1,
        ques:'B형간염은 어떻게 전파되나요?',
        ans:'B형간염 바이러스에 감염된 사람의 혈액이나 체액을 통해 전파됩니다. 주요 감염 경로는 주산기감염(B형간염 바이러스에 감염된 모체로부터의 감염), 오염된 혈액이나 체액에 의한 피부 및 점막을 통한 감염(수혈, 오염된 주사기에 찔리는 것, 혈액 투석, 침습적 검사나 시술 등), 성 접촉 등이 있습니다.'
      },
      {
        id: 2,
        ques:'B형간염의 증상은 무엇인가요?',
        ans:'급성 B형간염의 임상경과는 다른 간염 바이러스의 급성 경과와 구분이 불가능합니다. 대개 무증상 또는 다른 바이러스성 간염과 유사한 피로감, 식욕부진, 구역, 구토 등 비특이적인 증상과 우상복부 불편감, 쇠약감, 무기력, 황달, 옅은 색 또는 회색 변, 간의 압통과 종대 등이 나타날 수 있습니다.'
      },
      {
        id: 3,
        ques:'B형간염의 치료는 어떻게 하나요?',
        ans:'급성 B형간염의 치료는 증상을 줄이기 위한 대증요법이 주된 치료법이며, 만성 B형간염에서는 항바이러스제 투약 등의 치료법이 있습니다.'
      },
      {
        id: 4,
        ques:'B형간염은 어떻게 예방하나요?',
        ans:'B형간염 예방접종을 통해 B형간염을 예방할 수 있습니다.'
      }
    ]
  },
  {
    id: 3,
    iconsImage: Images.ico_vac4,
    vacName: '디프테리아',
    vacDes: '디프테리아균(Corynebacterium diphtheriae) 감염 후 발생하는 급성, 독소(toxin) 매개성 호흡기 감염병입니다. 디프테리아는 온대기후 지역에서 상대적으로 발생율이 높으나 전 세계적으로 디프테리아 발생은 매우 드물며, 예방접종으로 국내에서는 1988년 이후부터는 환자가 발생하고 있지 않습니다.',
    qaList: [
      {
        id: 1,
        ques:'디프테리아는 어떻게 전파되나요?',
        ans:'환자나 보균자와의 직접 접촉으로 주로 호흡기계를 통하여 전파되며 드물게 피부나 다른 병변의 분비물과의 직접 접촉에 의해 전파됩니다.'
      },
      {
        id: 2,
        ques:'디프테리아의 증상은 무엇인가요?',
        ans:'디프테리아균은 인체 모든 부위의 점막을 침범할 수 있으며 침범 부위의 막 형성이 특징입니다. 가장 흔한 발생부위는 인두와 편도부위입니다. 초기에는 피로, 인두통, 식욕감퇴, 미열 등의 증상이 나타나며, 중증인 경우 림프절염을 동반한 광범위한 경부 부종(bull neck)이 발생할 수 있습니다.'
      },
      {
        id: 3,
        ques:'디프테리아의 치료는 어떻게 하나요?',
        ans:'디프테리아로 진단되거나 의심되는 환자는 일단 항생제와 항독소를 투여하고 격리한 후 호흡기 관리와 기도유지를 해야합니다. 항생제 투여 후 48시간이 지나면 대개 전염력이 소실되며 치료 후 두 번 연속 배양검사에서 균이 자라지 않는 것을 확인해야 합니다.'
      },
      {
        id: 4,
        ques:'디프테리아는 어떻게 예방하나요?',
        ans:'DTaP, Tdap, Td 예방접종을 통해 디프테리아를 예방할 수 있습니다'
      }
    ]
  },
  {
    id: 4,
    iconsImage: Images.ico_vac4,
    vacName: '폴리오',
    vacDes: '폴리오바이러스(Poliovirus) 감염으로 인해 소아에게 하지 마비를 일으키는 질병이며 흔히 소아마비로 알려져 있습니다. 예방접종으로 국내에서는 1983년 이후 환자가 발생하지 않고 있습니다.',
    qaList: [
      {
        id: 1,
        ques:'폴리오는 어떻게 전파되나요?',
        ans:'사람이 유일한 숙주로 대개 분변-경구 혹은 호흡기를 통해 전파됩니다.'
      },
      {
        id: 2,
        ques:'폴리오의 증상은 무엇인가요?',
        ans:'소아마비로 알려진 질환으로 대부분은 감염되어도 증상이 나타나지 않지만, 일부에서 회색질 척수염 또는 수막염이 발생하고, 보다 드물게 팔이나 다리를 움직일 수 없는 마비성 회색질 척수염이 발생하기도 합니다. 마비성 회색질 척수염 발생 시 장애가 영구적으로 남을 수 있고, 호흡근 마비가 있을 경우 사망하기도 합니다. ▶ 폴리오의 치료는 어떻게 하나요? 특별한 치료법은 없으며 이환된 신경의 급성 증상에 대해서는 보존적 치료를 시행하고, 증상이 호전된 후에는 치유되지 않는 마비에 대한 재활치료를 합니다.'
      },
      {
        id: 3,
        ques:'폴리오의 치료는 어떻게 하나요?',
        ans:'특별한 치료법은 없으며 이환된 신경의 급성 증상에 대해서는 보존적 치료를 시행하고, 증상이 호전된 후에는 치유되지 않는 마비에 대한 재활치료를 합니다.'
      },
      {
        id: 4,
        ques:'폴리오는 어떻게 예방하나요?',
        ans:'폴리오 예방접종을 통해 폴리오를 예방할 수 있습니다.'
      }
    ]
  },
  {
    id: 5,
    iconsImage: Images.ico_vac5,
    vacName: 'b형헤모필루스인플루엔자',
    vacDes: 'b형헤모필루스인플루엔자균(Haemophilus influenzae type b)은 뇌수막염, 후두개염, 폐렴, 관절염, 봉와직염 등 중증 침습성 감염 질환의 원인이 되며, 특히 5세 미만 소아에서 주로 발생합니다.',
    qaList: [
      {
        id: 1,
        ques:'b형헤모필루스인플루엔자은 어떻게 전파되나요?',
        ans:'주로 기침이나 재채기를 할 때 분비되는 호흡기 비말에 의해서 상기도를 통하여 몸 속으로 침입하는 것으로 알려져 있습니다.'
      },
      {
        id: 2,
        ques:'b형헤모필루스인플루엔자 감염증의 증상은 무엇인가요?',
        ans:'b형 헤모필루스 인플루엔자균에 의한 침습성 질환은 여러 장기를 침범할 수 있으며, 가장 흔한 형태는 수막염, 후두개염, 폐렴, 화농성 관절염 및 봉와직염 등이 있습니다. 이 외에도 심낭염, 심내막염, 결막염, 골수염, 복막염, 고환 부고환염, 패혈성 혈전 정맥염 등을 일으킵니다.'
      },
      {
        id: 3,
        ques:'b형헤모필루스인플루엔자 감염증의 치료는 어떻게 하나요?',
        ans:'침습성 Hib 질환이 의심되는 환자는 즉시 입원하여 정맥용 항생제 치료를 시작해야 합니다.'
      },
      {
        id: 4,
        ques:'b형헤모필루스인플루엔자은 어떻게 예방하나요?',
        ans:'Hib 백신 접종을 통해 예방이 가능합니다.'
      }
    ]
  },
  {
    id: 6,
    iconsImage: Images.ico_vac6,
    vacName: '폐렴구균 감염증',
    vacDes: '폐렴구균(Streptococcus pneumoniae)은 급성 중이염, 폐렴 및 균혈증, 수막염 등 침습성 감염을 일으키는 주요 원인균 중의 하나이며, 폐렴구균에 의한 침습성 감염은 영아 및 어린 소아와 65세 이상의 고령자에서 발생 빈도가 높습니다.',
    qaList: [
      {
        id: 1,
        ques:'폐렴구균은 어떻게 전파되나요?',
        ans:'폐렴구균의 병원소는 증상이 없는 보균자의 비인두이며, 호흡기 비말(미세 침방울)을 통해 사람에서 사람으로 직접 전파되거나 상기도에 균을 가진 사람에서 자가접종(autoinoculation)에 의해 전파됩니다.'
      },
      {
        id: 2,
        ques:'폐렴구균의 증상은 무엇인가요?',
        ans:'폐렴구균에 의한 감염은 비침습성 감염(부비동염, 중이염, 폐렴 등)과 침습성 감염(수막염, 균혈증 등)으로 구분되며, 성인에서는 폐렴이 가장 흔하고 소아에서는 급성 중이염, 부비동염, 폐렴 및 패혈증 등이 흔히 나타납니다.'
      },
      {
        id: 3,
        ques:'폐렴구균의 치료는 어떻게 하나요?',
        ans:'폐렴구균의 감염 부위와 항생제 내성 여부를 고려하여 적절한 항생제 치료가 필요합니다.'
      },
      {
        id: 4,
        ques:'폐렴구균은 어떻게 예방하나요?',
        ans:'폐렴구균 예방접종을 통해 폐렴구균에 의한 감염증 발생을 줄일 수 있습니다.'
      }
    ]
  },
  {
    id: 7,
    iconsImage: Images.ico_vac7,
    vacName: '홍역',
    vacDes: '홍역은 전 세계적으로 유행하는 급성 발진성 바이러스 질환으로 전염성이 매우 높은 급성 유행성 감염병입니다. 이전에는 소아에서 생명을 위협하는 주요한 질병이었지만 백신이 개발된 이후 그 발생이 현저히 감소하였습니다. 하지만 일부 개발도상국가에서는 아직도 흔히 발생하고 있습니다. 국내에서는 2001년 대유행 이후로는 환자가 급격히 감소하였고, 우리나라는 36개월 이상 토착형 홍역바이러스에 의한 환자발생이 없고, 높은 홍역 예방접종률과 적절한 감시체계 유지, 유전자형 분석결과 등 세계보건기구의 홍역퇴치인증기준을 달성하여 2014년 홍역퇴치인증을 받았습니다. 최근 국내에서 보고되는 환자들은 대부분 국외에서 감염된 사례로 확인되고 있습니다.',
    qaList: [
      {
        id: 1,
        ques:'홍역은 어떻게 전파되나요?',
        ans:'홍역 바이러스는 인간만이 유일한 숙주이며 주로 호흡기 분비물 등의 비말(droplet)에 의하거나 오염된 물건을 통하여 호흡기로 감염됩니다.'
      },
      {
        id: 2,
        ques:'홍역의 증상은 무엇인가요?',
        ans:'처음에는 감기처럼 콧물, 기침 같은 증상과 결막염 등이 나타나다가 고열과 함께 얼굴에서 몸통으로 퍼지는 발진이 나타납니다. 중이염이나 폐렴 같은 합병증이 흔히 발생하고 홍역 환자 1,000명 중 1~2명은 뇌염처럼 심각한 후유증을 앓거나 사망에 이를 수 있습니다.'
      },
      {
        id: 3,
        ques:'홍역의 치료는 어떻게 하나요?',
        ans:'특별한 치료방법은 없습니다. 대다수의 환자가 자연 치유되므로 대증요법으로 충분한 경우가 대부분입니다.'
      },
      {
        id: 4,
        ques:'홍역은 어떻게 예방하나요?',
        ans:'MMR 예방접종을 통해 홍역을 예방할 수 있습니다.'
      }
    ]
  },
  {
    id: 8,
    iconsImage: Images.ico_vac8,
    vacName: '수두',
    vacDes: '수두는 수두-대상포진 바이러스(Varicella-Zoster virus, VZV)에 의한 일차 감염으로 전염력이 매우 강한 급성 감염질환입니다. 급성의 미열로 시작되고 전신적으로 가렵고 발진성 수포가 발생하는 질환입니다.',
    qaList: [
      {
        id: 1,
        ques:'수두는 어떻게 전파되나요?',
        ans:'수두 바이러스는 호흡기 분비물 등의 비말(미세 침방울, droplet)을 통해 호흡기로 감염되거나 피부 병변 수포액에 직접 접촉함으로써 사람에서 사람으로 전파될 수 있습니다.'
      },
      {
        id: 2,
        ques:'수두의 증상은 무엇인가요?',
        ans:'발진, 발열, 두통, 식욕상실 등의 증상이 흔하게 나타날 수 있습니다. 가려움을 동반한 수포성 발진이 보통 머리에서 나타나, 이후 몸통, 사지로 퍼지는 양상으로 나타나며, 수포는 가피를 남기고 호전됩니다.'
      },
      {
        id: 3,
        ques:'수두의 치료는 어떻게 하나요?',
        ans:' 수두는 특별한 치료제 없이 대증적인 치료만으로 호전 경과를 밟습니다. 해열제로는 라이증후군을 일으킬 수 있는 아스피린 대신 아세트아미노펜을 사용합니다. 환자의 나이, 이전 건강상태, 감염의 범위와 치료시기에 따라 중등도 이상의 심한 수두 질환의 위험이 있는 경우에는 항바이러스제의 투여가 필요합니다.'
      },
      {
        id: 4,
        ques:'수두 예방접종 후 이상반응에는 무엇이 있나요?',
        ans:'수두 예방접종 후에 생길 수 있는 이상반응은 실제로 드뭅니다. 이상반응 중 가장 흔한 것은 접종부위의 통증, 발적이나 부어오름 등이며, 전신 이상반응으로 발열, 수두 유사 발진이 발생할 수 있습니다.'
      }
    ]
  },
  {
    id: 9,
    iconsImage: Images.ico_vac9,
    vacName: '일본뇌염(약독화생)',
    vacDes: '일본뇌염은 Flavivirus 속 일본뇌염 바이러스(Japanese encephalitis virus)에 의한 인수공통감염병으로 작은빨간집모기(Culex tritaeniorhynchus)에 의해 감염되어 뇌염을 일으키는 질환입니다. 일단 일본뇌염에 걸리면 특별한 치료방법이 없으므로 백신 접종을 통한 예방이 최선입니다.',
    qaList: [
      {
        id: 1,
        ques:'일본뇌염은 어떻게 전파되나요?',
        ans:'일본뇌염은 Flavivirus 속 일본뇌염 바이러스(Japanese encephalitis virus)에 의한 인수공통감염병으로 작은빨간집모기(Culex tritaeniorhynchus)에 의해 감염되어 뇌염을 일으키는 질환입니다. 일단 일본뇌염에 걸리면 특별한 치료방법이 없으므로 백신 접종을 통한 예방이 최선입니다.'
      },
      {
        id: 2,
        ques:'일본뇌염의 증상은 무엇인가요?',
        ans:'일본뇌염 바이러스를 가진 "작은빨간집모기"에 물리면 감염됩니다.'
      },
      {
        id: 3,
        ques:'일본뇌염의 치료는 어떻게 하나요?',
        ans:'일본뇌염 바이러스의 인체 감염은 대부분 무증상이며, 감염자의 약 250명 중 1명에서 임상증상을 나타내며, 열을 동반하는 가벼운 증상이나 바이러스성 수막염으로 이행되기도 하고 드물게 뇌염으로까지 진행될 수 있습니다. 뇌염으로 진행된 경우 약 30%의 치명률을 보입니다.'
      },
      {
        id: 4,
        ques:'일본뇌염은 어떻게 예방하나요?',
        ans:'일본뇌염에 대한 특이적인 치료법은 없고 호흡장애, 순환장애, 세균감염 등에 대해서는 보존적인 치료가 필요합니다. ▶ 일본뇌염은 어떻게 예방하나요? 일본뇌염 예방접종을 통해 일본뇌염을 예방할 수 있습니다.'
      }
    ]
  },
  {
    id: 10,
    iconsImage: Images.ico_vac10,
    vacName: '인플루엔자',
    vacDes: '인플루엔자는 인플루엔자 바이러스(Influenza virus)에 의한 감염병으로 매년 겨울철에 유행하여 고열과 함께 기침 등의 호흡기 증상을 일으키는 질환입니다.',
    qaList: [
      {
        id: 1,
        ques:'인플루엔자는 어떻게 전파되나요?',
        ans:'인플루엔자 환자가 기침이나 재채기를 할 때 분비되는 호흡기 비말을 통해서 사람에서 사람으로 전파됩니다.'
      },
      {
        id: 2,
        ques:'인플루엔자의 증상은 무엇인가요?',
        ans:'갑작스러운 발열(38℃ 이상), 두통, 근육통, 피로감 등의 전신 증상과 함께 인두통, 콧물, 코막힘 및 기침 등이 인플루엔자의 흔한 증상입니다. 소아의 경우 오심, 구토 및 설사 등의 소화기 증상이 동반될 수 있습니다.'
      },
      {
        id: 3,
        ques:'인플루엔자의 치료는 어떻게 하나요?',
        ans:'안정을 취하고 수분 섭취를 하고, 필요에 따라 해열진통제 등을 사용하는 지지요법으로 충분히 호전됩니다. 인플루엔자에 의한 합병증 발생의 위험이 높은 고위험군은 인플루엔자 항바이러스제가 유용하게 사용될 수 있으나 인플루엔자 증상 발현 후 48시간 이내 투약하는 경우에 증상을 완화시키거나 이환기간을 단축시키는 효과가 있습니다. 항바이러스제 사용여부는 담당의사와 상의 후 결정하여야 합니다.'
      },
      {
        id: 4,
        ques:'인플루엔자는 어떻게 예방하나요?',
        ans:'인플루엔자 예방접종을 통해 인플루엔자를 예방할 수 있습니다.'
      }
    ]
  },
  {
    id: 11,
    iconsImage: Images.ico_vac11,
    vacName: '장티푸스',
    vacDes: '장티푸스는 장티푸스균(Salmonella Typhi)의 파종감염에 의해 발생하는 급성 전신성 열성질환으로 상하수도 시설이 미비한 개발도상국에서 지속적으로 유행이 되는 질환입니다.',
    qaList: [
      {
        id: 1,
        ques:'장티푸스는 어떻게 전파되나요?',
        ans:'환자나 보균자의 소변이나 분변으로 오염된 식수나 음식을 섭취 시 감염이 되며 오염된 하천에서 자란 갑각류나 어패류, 배설물이 묻은 과일 등을 통해 감염됩니다.'
      },
      {
        id: 2,
        ques:'장티푸스의 증상은 무엇인가요?',
        ans:'3~60일(평균 8~14일) 정도의 잠복기를 지나 환자는 지속적인 발열과 두통, 오한, 기침, 식은땀, 식욕부진, 근육통, 권태감 등이 있으며, 발병 초기(1주 말)에 몸통에 일시적으로 피부발진(장미진, rose spot)이 나타날 수 있고, 변비, 설사 등도 나타납니다. 설사는 어린 소아에서 더 흔하며 변비는 나이가 많은 소아와 성인에게 주로 발생합니다.'
      },
      {
        id: 3,
        ques:'장티푸스의 치료는 어떻게 하나요?',
        ans:'일반적으로 충분한 휴식, 수액과 전해질 균형 유지, 적절한 식이를 제공하고, 항생제 투여로 합병증을 예방할 수 있습니다.'
      },
      {
        id: 4,
        ques:'장티푸스는 어떻게 예방하나요?',
        ans:'장티푸스 예방접종 후에 생길 수 있는 이상반응은 실제로 드뭅니다. 불활성화 백신의 경우 접종부위 통증, 발열, 부기, 발적, 경화 등이 있으며, 성인에 비해 소아에서 증상이 경미합니다. 경구용 생백신의 경우 복부팽만, 식욕부진, 소화불량, 무력감 등이 나타날 수 있으며, 설사, 구역, 구토, 두통, 피부발진, 두드러기, 오한, 관절통 등이 있습니다.'
      }
    ]
  },
  {
    id: 12,
    iconsImage: Images.ico_vac12,
    vacName: '신증후군출혈열',
    vacDes: '신증후군출혈열(유행성출혈열)은 고열, 혈소판 감소증, 신부전 등을 특징으로 하는 급성 열성질환으로 Bunyaviridae과의 Hantavirus 속에 포함되는 여러 종의 바이러스에 의한 설치류 매개 인수공통감염병입니다.',
    qaList: [
      {
        id: 1,
        ques:'신증후군출혈열은 어떻게 전파되나요?',
        ans:'바이러스가 포함된 설치류의 배설물이 에어로졸의 형태로 호흡기를 통해 유입되어 발생하거나 드물게 설치류에게 물린 상처를 통해 전염됩니다.'
      },
      {
        id: 2,
        ques:'신증후군출혈열의 증상은 무엇인가요?',
        ans:' 잠복기는 9~35일(평균 약 2~3주)이며 갑작스러운 발열, 출혈경향, 요통, 신부전이 특징인 질환입니다.'
      },
      {
        id: 3,
        ques:'신증후군출혈열의 치료는 어떻게 하나요?',
        ans:'치료를 위한 특이요법은 없고 임상경과 시기별로 적절한 보조요법(혈압상승제 투여, 수액요법, 알부민 정맥주사 그리고 신부전 발생 시 투석 치료 등)을 실시하며, 치료에 앞서 출혈이나 쇼크의 발생을 감소시키기 위해 절대 안정이 필요합니다.'
      },
      {
        id: 4,
        ques:'신증후군출혈열은 어떻게 예방하나요?',
        ans:'신증후군출혈열 위험지역에서 야외 노출을 최소화하는 것이 중요하며 신증후군출혈열 예방접종을 통해 신증후군출혈열을 예방할 수 있습니다.'
      }
    ]
  },

    {
    id: 13,
    iconsImage: Images.ico_vac13,
    vacName: 'A형간염',
    vacDes: 'A형간염은 A형간염 바이러스(Hepatitis A virus, HAV)에 의하여 발생하는 간염으로 환경 및 위생개선과 적절한 예방조치로 예방이 가능합니다. ▶ A형간염은 어떻게 전파되나요? A형간염은 분변-경구 경로로 전파되며, 대부분 사람에서 사람으로 직접적으로 전파되거나 분변에 오염된 물이나 음식물을 섭취함으로써 간접적으로 전파되기도 합니다.',
    qaList: [
      {
        id: 1,
        ques:'A형간염은 어떻게 전파되나요?',
        ans:'A형간염은 A형간염 바이러스(Hepatitis A virus, HAV)에 의하여 발생하는 간염으로 환경 및 위생개선과 적절한 예방조치로 예방이 가능합니다.'
      },
      {
        id: 2,
        ques:'A형간염의 증상은 무엇인가요?',
        ans:'전형적인 증상은 고열, 권태감, 식욕부진, 메스꺼움, 복통, 암갈색 소변, 황달 등으로 갑자기 발생합니다. 증상의 발현은 연령과 관련이 있어 6세 미만의 소아에서는 증상이 경하며 황달이 생기는 경우는 드물지만, 6세 이상의 소아나 성인에서는 대부분 간염의 증상이 생기며, 이 중 70% 이상에서 황달이 동반됩니다. 이러한 증상은 대체로 2개월을 넘지 않으나 10~15%에서는 6개월 이상 증상이 지속되거나 재발할 수 있습니다. 하지만 만성화되는 경우는 없습니다.'
      },
      {
        id: 3,
        ques:'A형간염의 치료는 어떻게 하나요?',
        ans:'A형간염은 특별한 치료법이 없으며 대증요법으로 치료합니다.'
      },
      {
        id: 4,
        ques:'A형간염은 어떻게 예방하나요?',
        ans:'A형간염 예방접종을 통해 A형간염을 예방할 수 있습니다.'
      }
    ]
  },  {
    id: 14,
    iconsImage: Images.ico_vac14,
    vacName: '로타바이러스 감염증',
    vacDes: '로타바이러스는 영유아에게서 발생하는 위장관염의 흔한 원인으로 감염 시 구토, 설사, 발열, 복통 등의 증상이 나타나게 됩니다. ▶ 로타바이러스는 어떻게 전파되나요? 로타바이러스는 분변-경구 경로로 전파되며, 대부분 사람에서 사람으로 직접적으로 전파되나 분변에 오염된 물건이나 음식물, 호흡기를 통해서도 간접적으로 전파되기도 합니다.',
    qaList: [
      {
        id: 1,
        ques:'로타바이러스는 어떻게 전파되나요?',
        ans:'약 2일 정도의 잠복기를 거쳐 구토, 설사, 발열 등의 증상이 나타납니다. 5세까지 대부분의 소아는 로타바이러스에 감염되며, 심한 증상은 주로 4~36개월 연령의 소아에게 일어납니다. 신생아는 태반을 통해 전달된 항체가 심한 증상 발생을 예방하여 이 시기에 감염되면 대부분 증상이 없거나 경미합니다.'
      },
      {
        id: 2,
        ques:'로타바이러스 감염에 의한 위장관염의 증상은 무엇인가요?',
        ans:'약 2일 정도의 잠복기를 거쳐 구토, 설사, 발열 등의 증상이 나타납니다. 5세까지 대부분의 소아는 로타바이러스에 감염되며, 심한 증상은 주로 4~36개월 연령의 소아에게 일어납니다. 신생아는 태반을 통해 전달된 항체가 심한 증상 발생을 예방하여 이 시기에 감염되면 대부분 증상이 없거나 경미합니다.'
      },
      {
        id: 3,
        ques:'로타바이러스 감염에 의한 위장관염의 치료는 어떻게 하나요?',
        ans:'로타바이러스 위장관염은 특별한 치료법이 없으며 설사나 구토, 발열로 인한 탈수 및 전해질의 불균형이 문제가 될 수 있으므로 수액보충이나 전해질 불균형을 교정하는 등 환자의 상태에 따라 대증요법으로 치료합니다.'
      },
      {
        id: 4,
        ques:'로타바이러스는 어떻게 예방하나요?',
        ans:'로타바이러스 감염증 예방접종을 통해 로타바이러스 감염에 의한 위장관염을 예방할 수 있습니다. 로타바이러스 감염증 예방접종은 2023년부터 필수예방접종 대상 감염병에 포함되었으며, 예방접종의 효과 등을 고려하여 의사와 상의한 후 접종 여부를 결정하도록 합니다.'
      }
    ]
  },
  {
    id: 15,
    iconsImage: Images.ico_vac15,
    vacName: '사람유두종바이러스 감염증',
    vacDes: '사람유두종바이러스는 생식기 감염을 일으키는 가장 흔한 원인 병원체 중 하나로, 고위험군 HPV 감염과 관련 있는 암으로는 자궁경부암, 질암, 외음부암, 음경암, 항문암, 구강암, 구인두암 등이 있고 저위험군 HPV 감염과 관련 있는 질환으로는 생식기 사마귀, 재발성 호흡기 유두종 등이 있습니다.',
    qaList: [
      {
        id: 1,
        ques:'사람유두종바이러스은 어떻게 전파되나요?',
        ans:'사람유두종바이러스는 주로 감염된 사람과의 성접촉을 통해 전파됩니다.'
      },
      {
        id: 2,
        ques:'사람유두종바이러스의 증상은 무엇인가요?',
        ans:'사람유두종바이러스 감염은 대부분 증상이 없고, 여성 생식기에 약 6~12개월간 유지되었다가 자연적으로 소멸되지만, 지속적인 HPV 감염은 자궁경부암, 자궁경부 전암병변, 질암과 외음부암, 항문 및 생식기 사마귀와 호흡기에 생기는 유두종 등의 다양한 임상질환을 일으킵니다.'
      },
      {
        id: 3,
        ques:'사람유두종바이러스의 치료는 어떻게 하나요?',
        ans:'사람유두종바이러스 감염 자체를 치료할 수 있는 방법은 없으며 사람유두종바이러스로 인한 질병의 종류에 따라 치료법이 달라집니다.'
      },
      {
        id: 4,
        ques:'사람유두종바이러스은 어떻게 예방하나요?',
        ans:'사람유두종바이러스 감염증 예방접종을 통해 백신에 포함된 유형에 의한 사람유두종바이러스 감염을 예방할 수 있습니다.'
      },
      {
        id: 5,
        ques:'사람유두종바이러스 감염증 예방접종 후 이상반응에는 무엇이 있나요?',
        ans:'사람유두종바이러스 감염증 예방접종 후 접종부위 통증, 부어오름, 발적, 두드러기 등의 국소반응 또는 발열, 메스꺼움, 근육통 등의 전신반응이 나타날 수 있지만 대부분 가볍고 수일 내에 회복됩니다.'
      }
    ]
  },
  {
    id: 16,
    iconsImage: Images.ico_vac16,
    vacName: '수막구균',
    vacDes: '수막구균 감염증은 수막구균(Neisseria meningitidis)에 의한 급성 감염병으로, 주로 수막염과 패혈증을 일으키는 중증 질환입니다.',
    qaList: [
      {
        id: 1,
        ques:'수막구균 감염증은 어떻게 전파되나요?',
        ans:'환자나 건강한 보균자의 코나 입의 점액에 있던 수막구균이 작은 수포 또는 직접 접촉을 통해 전파됩니다.'
      },
      {
        id: 2,
        ques:'수막구균 감염증의 증상은 무엇인가요?',
        ans:'수막구균은 수막염과 패혈증, 기타 감염을 일으킵니다. 수막구균에 의한 수막염은 두통, 발열, 경부 경직, 오심, 구토 등이 급격히 시작하며, 더 진행되면 의식이 혼탁해집니다. 수막구균 패혈증은 수막염의 증상이 없으면서 혈액에서 수막구균이 발견되는 경우로 피부에 출혈소견이 동반되기도 하며, 발병 24시간 이내에 사망하기도 합니다. 기타 감염으로 폐렴, 관절염, 후두개염, 중이염, 심낭염 등이 있으나 수막구균 감염증의 특징적인 증상 없이 해당 부위 검체에서 수막구균이 확인된 경우입니다.'
      },
      {
        id: 3,
        ques:'수막구균 감염증의 치료는 어떻게 하나요?',
        ans:'빠르게 진행하는 세균 감염이므로 항생제 치료가 중요합니다.'
      },
      {
        id: 4,
        ques:'수막구균 감염증은 어떻게 예방하나요?',
        ans:'수막구균 예방접종을 통해 예방이 가능합니다. 수막구균 예방접종은 필수예방접종 대상 감염병에 포함되지 않으며, 수막구균 감염 위험이 높은 대상자에게 접종이 권고되므로 의사와 상의한 후 접종여부를 결정하도록 합니다.'
      },
      {
        id: 5,
        ques:'수막구균 감염증 예방접종 후 이상반응에는 무엇이 있나요?',
        ans:'수막구균 예방접종 후에 생길 수 있는 국소 이상반응에는 접종부위 발적, 부종, 동통이 있으며, 전신 이상반응으로 발열, 두통, 무기력 등이 나타날 수 있습니다.'
      }
    ]
  },
  {
    id: 17,
    iconsImage: Images.ico_vac17,
    vacName: '대상포진',
    vacDes: '대상포진은 피부분절을 따라서 수포성 발진이 발생하는 질환으로 수두-대상포진바이러스(Varicella-zoster virus, VZV)의 일차 감염 후 감각신경절에 잠복해 있던 바이러스가 재활성화되어 발생하는 질환입니다.',
    qaList: [
      {
        id: 1,
        ques:'대상포진은 어떻게 전파되나요?',
        ans:'대상포진의 수포에는 VZV가 있기 때문에 VZV에 대한 면역력이 없는 사람이 대상포진 환자와 접촉하는 경우 VZV가 재활성되면서 수두를 일으킬 수 있습니다. 국소적인 대상포진의 경우 수포가 생기기 시작할 때부터 모든 병소에 가피가 생길 때까지 전파가능성이 있으며 대개 병소와 직접 접촉에 의해 전파됩니다.'
      },
      {
        id: 2,
        ques:'대상포진의 증상은 무엇인가요?',
        ans:'발진과 수포가 등신경뿌리 신경절이 분포하는 편측에 국한적으로 발생하며, 해당 부위 심한 통증과 지각 이상이 동반될 수 있으며, 특이하게 대상포진과 안면신경마비나 내이신경증상이 동반하는 람지-헌트 증후군(Ramsay-Hunt syndrome)이 나타날 수 있습니다. 대상포진의 합병증으로 가장 문제가 되는 것은 대상포진 후 신경통으로 연령이 많을수록 발생 빈도가 높습니다. 소아에게 대상포진은 흔하지 않으며 발생하는 경우에도 증상이 경미합니다.'
      },
      {
        id: 3,
        ques:'대상포진의 치료는 어떻게 하나요?',
        ans:'성인의 경우 항바이러스제를 투여하면 증상의 경감과 치료기간의 단축, 합병증 감소를 기대할 수 있습니다.'
      },
      {
        id: 4,
        ques:'대상포진은 어떻게 예방하나요?',
        ans:'대상포진 예방접종을 통해 예방이 가능하나 대상포진 예방접종은 필수예방접종 대상 감염병에 포함되지 않습니다.'
      },
      {
        id: 5,
        ques:'대상포진 예방접종 후 이상반응에는 무엇이 있나요?',
        ans:'대상포진 예방접종 후 이상반응에는 무엇이 있나요? 대상포진 예방접종 후 접종 부위 발적, 통증, 부종과 같은 국소반응이 가장 흔하게 나타납니다.'
      },
    ]
  },
  {
    id: 18,
    iconsImage: Images.ico_vac18,
    vacName: '파상풍',
    vacDes: '파상풍균(Clostridium tetani)이 생산하는 독소에 의해 유발되는 급성질환으로 파상풍에 이환되면 골격근의 경직과 근육수축이 발생하는 질병입니다.',
    qaList: [
      {
        id: 1,
        ques:'파상풍균은 어떻게 전파되나요?',
        ans:'파상풍균은 토양이 풍부한 고온다습 기후의 인구 밀집 지역에서 흔히 발생하며 오염된 상처를 통해 감염됩니다.'
      },
      {
        id: 2,
        ques:'파상풍균의 증상은 무엇인가요?',
        ans:'잠복기는 1일~수개월까지 다양하지만 일반적으로 3일~21일 이내에 증상이 발생하며 상처가 심할수록 잠복기가 짧아집니다.'
      },
      {
        id: 3,
        ques:'파상풍균의 치료는 어떻게 하나요?',
        ans:'대증치료와 독소가 중추신경계에 더 이상 침범하는 것을 방지하고 균주를 제거해 독소 생성을 차단해야 합니다. 파상풍 사람면역글로불린(Tetanus Immunoglobuline, TIG)을 투여하고(TIG가 없는 경우에는 정맥용 면역글로불린 투여 고려 가능), 적절한 항생제 사용 및 상처 부위 배농이나 절제가 필수적입니다. 파상풍은 감염 후에도 방어면역이 획득되지 않기 때문에 회복기에 반드시 파상풍 백신을 접종해야 합니다.'
      },
      {
        id: 4,
        ques:'파상풍균은 어떻게 예방하나요?',
        ans:'DTaP, Tdap, Td 예방접종을 통해 파상풍을 예방할 수 있습니다.'
      },
      {
        id: 5,
        ques:'DTaP, Tdap, Td 예방접종 후 이상반응에는 무엇이 있나요?',
        ans:'DTaP, Tdap, Td 예방접종 후에 생길 수 있는 이상반응 중 가장 흔한 것은 접종부위가 빨갛게 변하고 붓고, 통증, 어지러움, 식욕부진, 구토, 미열이 나타날 수 있습니다. 디프테리아 혹은 파상풍 성분이 포함된 백신을 접종 받은 사람 중에 극히 드물게 악화된 국소반응인 아루투스 반응(Arthus reaction)이 발생합니다. 전신반응으로는 전신 두드러기, 아나필락시스 반응, 신경학적 합병증 등이 발생할 수 있습니다.'
      }
    ]
  },
  {
    id: 19,
    iconsImage: Images.ico_vac19,
    vacName: '백일해',
    vacDes: '백일해는 그람음성간균인(Bordetella pertussis)에 의한 호흡기 감염 질환입니다. 계절에 따른 발병률 차이는 명백히 밝혀진 바 없으나, 여름과 가을에 증가하는 경향을 보이며 전염성이 매우 높아 가족 내 2차 발병률이 80%에 달합니다.',
    qaList: [
      {
        id: 1,
        ques:'백일해는 어떻게 전파되나요?',
        ans:'기침이나 재채기 등의 호흡기 분비물이나 비말을 통한 호흡기 전파가 주된 경로로 사람에서 사람으로 전파됩니다.'
      },
      {
        id: 2,
        ques:'백일해의 증상은 무엇인가요?',
        ans:'콧물, 재채기, 미열, 경미한 기침 등의 감기와 비슷한 증상이 발생하며 기침이 점진적으로 심해져서 1~2주가 경과하면 매우 심한 기침발작이 2~3주간 더 지속되다가 기침발작의 빈도나 정도가 줄어들면서 점진적으로 회복기로 접어들게 됩니다. 신생아의 경우 심한 발작적인 기침으로 사망률이 높습니다.'
      },
      {
        id: 3,
        ques:'백일해의 치료는 어떻게 하나요?',
        ans:'대증적 치료가 주를 이루고, 항생제 치료의 효과는 제한적입니다.'
      },
      {
        id: 4,
        ques:'백일해는 어떻게 예방하나요?',
        ans:'DTaP, Tdap 예방접종을 통해 백일해를 예방할 수 있습니다.'
      },
      {
        id: 5,
        ques:'DTaP, Tdap, Td 예방접종 후 이상반응에는 무엇이 있나요?',
        ans: '모든 주사용 백신과 마찬가지로 통증, 발적 등의 국소 이상반응이 발생할 수 있습니다. 접종 부위의 국소 이상반응은 4차, 5차 접종 때 심하게 발생하는 경향이 있습니다. Tdap을 접종 받은 경우에 흔한 이상반응으로는 주사 부위의 통증, 발적, 종창과 같은 국소반응이 나타나고, 이외 고열, 두통, 피로, 소화기 증상과 같은 비특이적 전신 증상이 드물게 발생하기도 합니다.'
      }
    ]
  },
  {
    id: 20,
    iconsImage: Images.ico_vac20,
    vacName: '유행성이하선염',
    vacDes: '유행성이하선염은 볼거리라고도 하며, 귀 아래의 침샘이 부어오르고 열과 두통이 동반되는 감염성 바이러스 질환입니다.',
    qaList: [
      {
        id: 1,
        ques:'유행성이하선염은 어떻게 전파되나요?',
        ans:'호흡기 비말(미세 침방울) 감염, 오염된 타액과의 직접 접촉을 통해 감염됩니다.'
      },
      {
        id: 2,
        ques:'유행성이하선염의 증상은 무엇인가요?',
        ans:'발병 초기에 발열, 두통, 근육통, 식욕부진, 권태감 등의 증상이 나타나며, 침샘염은 가장 흔한 증상 중 하나로 감염된 환자 30~65%에서 나타나게 되며 한쪽 또는 양쪽 볼이 붓는 증상이 1주정도 지속되다가 대개 10일 후면 회복하게 됩니다. 합병증으로 수막염을 일으킬 수 있고 간혹 뇌염, 청력장애, 고환염, 난소염, 췌장염. 심근염 등을 일으킬 수도 있으며, 매우 드물지만 사망하는 경우도 있습니다.'
      },
      {
        id: 3,
        ques:'유행성이하선염의 치료는 어떻게 하나요?',
        ans:'특별한 치료방법은 없습니다. 대다수의 환자가 자연 치유되므로 대증요법으로 충분한 경우가 대부분입니다. 통증이 심한 경우에는 진통제를 투여할 수 있습니다.'
      },
      {
        id: 4,
        ques:'유행성이하선염은 어떻게 예방하나요?',
        ans:'MMR 예방접종을 통해 유행성이하선염을 예방할 수 있습니다.'
      },
      {
        id: 5,
        ques:'MMR 예방접종 후 이상반응에는 무엇이 있나요?',
        ans:'MMR 예방접종 후에 생길 수 있는 이상반응은 실제로 드뭅니다. 전신 이상반응으로 발열, 발진은 대개 홍역 성분에 의한 것이며, MMR 백신 접종 후 발생하는 이상반응인 알레르기 반응을 제외하고는 드물게 이하선염 등이 발생할 수 있습니다.'
      }
    ]
  },
  {
    id: 21,
    iconsImage: Images.ico_vac21,
    vacName: '풍진',
    vacDes: '풍진은 발진, 림프절염을 동반하는 급성 바이러스성 질환입니다. 임신 초기의 임신부가 풍진에 감염될 경우 유산을 하거나 태아에게 선천성 기형을 유발할 수 있습니다.',
    qaList: [
      {
        id: 1,
        ques:'풍진은 어떻게 전파되나요?',
        ans:'호흡기 비말(미세 침방울) 감염 또는 태아의 경우 태반을 통하여 모체로부터 감염됩니다.'
      },
      {
        id: 2,
        ques:'풍진의 증상은 무엇인가요?',
        ans:'소아는 뚜렷한 증상 없이 반점 구진성 발진으로 시작할 수 있으며, 연장아나 성인의 경우에는 미열, 귀 뒤, 목뒤와 후두부의 림프절 종창 및 상기도 감염 증상이 발진이 나타나기 전 1~5일간 지속될 수 있습니다. 임신 초기에 풍진에 이환될 경우 태아의 모든 장기에 영향을 줄 수 있고 태아사망, 자궁 내 발육부전, 백내장, 난청, 선천성 심장질환(특히 동맥관 개존증, 폐동맥 협착), 소두증, 신생아 자반, 수막뇌염 등이 나타날 수 있습니다. 감염자의 30~60%에서 선천적인 기형이 초래됩니다.'
      },
      {
        id: 3,
        ques:'풍진의 치료는 어떻게 하나요?',
        ans:'특별한 치료방법은 없습니다. 대다수의 환자가 자연 치유되므로 대증요법으로 충분한 경우가 대부분입니다.'
      },
      {
        id: 4,
        ques:'풍진은 어떻게 예방하나요?',
        ans:'MMR 예방접종을 통해 풍진을 예방할 수 있습니다.'
      },
      {
        id: 5,
        ques:'MMR 예방접종 후 이상반응에는 무엇이 있나요?',
        ans:'MMR 예방접종 후에 생길 수 있는 이상반응은 발열, 림프절 비대와 관절통입니다. 국소 이상반응으로 접종부위 통증, 압통 등이 발생할 수 있으며, 이러한 이상반응은 풍진에 대한 면역이 없던 사람에서만 나타나며 성인, 특히 여성에서 더 흔하게 나타납니다.'
      }
    ]
  },
  {
    id: 22,
    iconsImage: Images.ico_vac22,
    vacName: '일본뇌염(불활성화)',
    vacDes: '일본뇌염은 Flavivirus 속 일본뇌염 바이러스(Japanese encephalitis virus)에 의한 인수공통감염병으로 작은빨간집모기(Culex tritaeniorhynchus)에 의해 감염되어 뇌염을 일으키는 질환입니다. 일단 일본뇌염에 걸리면 특별한 치료방법이 없으므로 백신 접종을 통한 예방이 최선입니다.',
    qaList: [
      {
        id: 1,
        ques:'일본뇌염은 어떻게 전파되나요?',
        ans:'일본뇌염은 Flavivirus 속 일본뇌염 바이러스(Japanese encephalitis virus)에 의한 인수공통감염병으로 작은빨간집모기(Culex tritaeniorhynchus)에 의해 감염되어 뇌염을 일으키는 질환입니다. 일단 일본뇌염에 걸리면 특별한 치료방법이 없으므로 백신 접종을 통한 예방이 최선입니다.'
      },
      {
        id: 2,
        ques:'일본뇌염의 증상은 무엇인가요?',
        ans:'일본뇌염 바이러스를 가진 "작은빨간집모기"에 물리면 감염됩니다.'
      },
      {
        id: 3,
        ques:'일본뇌염의 치료는 어떻게 하나요?',
        ans:'일본뇌염 바이러스의 인체 감염은 대부분 무증상이며, 감염자의 약 250명 중 1명에서 임상증상을 나타내며, 열을 동반하는 가벼운 증상이나 바이러스성 수막염으로 이행되기도 하고 드물게 뇌염으로까지 진행될 수 있습니다. 뇌염으로 진행된 경우 약 30%의 치명률을 보입니다.'
      },
      {
        id: 4,
        ques:'일본뇌염은 어떻게 예방하나요?',
        ans:'일본뇌염에 대한 특이적인 치료법은 없고 호흡장애, 순환장애, 세균감염 등에 대해서는 보존적인 치료가 필요합니다. ▶ 일본뇌염은 어떻게 예방하나요? 일본뇌염 예방접종을 통해 일본뇌염을 예방할 수 있습니다.'
      }
    ]
  },
];
